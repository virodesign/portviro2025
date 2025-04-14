import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample project data - in a real app, this would come from a database or API
const projects = [
  {
    id: "1",
    title: "Fintech Design System",
    category: "Design System",
    client: "Global Financial Services",
    year: "2023",
    description:
      "A comprehensive design system for a financial technology platform, focusing on accessibility and scalability.",
    challenge:
      "The client needed a unified design language across multiple products and platforms, with a focus on accessibility and compliance with financial regulations.",
    solution:
      "I created a modular design system with a component library that could be used across web and mobile applications. The system included detailed documentation, usage guidelines, and accessibility standards.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Fintech+Main",
      "/placeholder.svg?height=800&width=1200&text=Fintech+Components",
      "/placeholder.svg?height=800&width=1200&text=Fintech+Mobile",
    ],
  },
  {
    id: "2",
    title: "E-commerce Rebrand",
    category: "Branding",
    client: "Retail Company",
    year: "2022",
    description: "A complete rebrand for an established e-commerce platform, including visual identity and UI design.",
    challenge:
      "The client wanted to modernize their brand while maintaining recognition among existing customers and expanding to new markets.",
    solution:
      "I developed a refreshed brand identity that honored their heritage while introducing contemporary elements. This included a new logo, color palette, typography, and UI components.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Ecommerce+Main",
      "/placeholder.svg?height=800&width=1200&text=Ecommerce+Brand",
      "/placeholder.svg?height=800&width=1200&text=Ecommerce+UI",
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = projects.find((p) => p.id === params.id) || projects[0]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} main image`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light tracking-tighter mb-2">{project.title}</h1>
              <p className="text-muted-foreground">{project.category}</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Client</h3>
                  <p>{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Year</h3>
                  <p>{project.year}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                <p>{project.description}</p>
              </div>
            </div>

            <Button className="w-full">
              <span>View Live Project</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light tracking-tighter mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-light tracking-tighter mb-4">The Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
