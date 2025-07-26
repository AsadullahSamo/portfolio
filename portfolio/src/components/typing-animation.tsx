'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NoSSR } from './no-ssr'

interface TypingAnimationProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
}

export function TypingAnimation({
  texts,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Only start animation after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentFullText = texts[currentTextIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [mounted, currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetweenTexts])

  // Cursor blinking effect
  useEffect(() => {
    if (!mounted) return

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [mounted])

  return (
    <NoSSR fallback={
      <span className={className}>
        {texts[0]}
        <span className="inline-block">|</span>
      </span>
    }>
      <span className={className}>
        {currentText}
        <motion.span
          className="inline-block"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          |
        </motion.span>
      </span>
    </NoSSR>
  )
}
