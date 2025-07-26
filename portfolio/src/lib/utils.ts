import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function formatDateRange(startDate: Date | string, endDate?: Date | string | null) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null
  
  const startFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(start)
  
  if (!end) {
    return `${startFormatted} - Present`
  }
  
  const endFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(end)
  
  return `${startFormatted} - ${endFormatted}`
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str
  return str.slice(0, length) + "..."
}
