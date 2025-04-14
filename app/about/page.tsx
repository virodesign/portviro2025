import Link from "next/link"
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground">
            UI/UX designer specializing in design systems, branding, and accessible interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=600&text=Portrait"
              alt="Designer portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tighter">Hi, I'm Alex Chen</h2>
            <p className="text-muted-foreground">
              I'm a UI/UX designer with over 8 years of experience creating digital products and design systems. My
              approach combines aesthetic sensibility with a deep understanding of user needs and business goals.
            </p>
            <p className="text-muted-foreground">
              I specialize in creating cohesive design systems that scale, with a particular focus on accessibility and
              inclusive design practices. My work spans from early-stage startups to enterprise organizations across
              fintech, healthcare, e-commerce, and education sectors.
            </p>
            <p className="text-muted-foreground">
              When I'm not designing, you can find me teaching design workshops, writing about design systems, or
              exploring new creative tools and technologies.
            </p>

            <div className="pt-4">
              <Link href="/contact">
                <Button className="group">
                  <span>Get in touch</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Experience</h3>
            <p className="text-muted-foreground">
              8+ years working with startups, agencies, and enterprise companies to create impactful digital
              experiences.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Education</h3>
            <p className="text-muted-foreground">
              Master's in Interaction Design and Bachelor's in Visual Communication from leading design institutions.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Recognition</h3>
            <p className="text-muted-foreground">
              Award-winning designs recognized by Awwwards, CSS Design Awards, and industry publications.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light tracking-tighter text-center mb-12">My Design Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                1
              </div>
              <h3 className="text-xl font-medium">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding the problem space, user needs, business goals, and technical constraints through research
                and stakeholder interviews.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                2
              </div>
              <h3 className="text-xl font-medium">Definition</h3>
              <p className="text-muted-foreground">
                Defining the scope, creating user personas, journey maps, and establishing design principles and success
                metrics.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                3
              </div>
              <h3 className="text-xl font-medium">Design</h3>
              <p className="text-muted-foreground">
                Iterative design process including wireframing, prototyping, visual design, and usability testing with
                real users.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                4
              </div>
              <h3 className="text-xl font-medium">Delivery</h3>
              <p className="text-muted-foreground">
                Creating detailed specifications, design systems, and working closely with developers to ensure quality
                implementation.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-light tracking-tighter mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm currently available for freelance projects, consulting, and full-time opportunities. If you're looking
            for a designer who combines strategic thinking with execution excellence, let's talk.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              <span>Contact me</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
