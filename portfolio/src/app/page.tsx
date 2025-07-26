import { Layout, Section, Hero, About, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Projects Section */}
      <Section id="projects">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project One</CardTitle>
                <CardDescription>
                  A full-stack web application built with modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed description of the project, its features, and impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Two</CardTitle>
                <CardDescription>
                  Mobile-first responsive design with advanced animations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Another project showcasing different skills and technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Three</CardTitle>
                <CardDescription>
                  Open source contribution to developer tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contributing to the developer community through open source.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" background="muted">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've worked with
          </p>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="muted">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
          <Button size="lg">
            Send Message
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
