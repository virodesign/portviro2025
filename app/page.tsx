import Link from "next/link"
import { ArrowRight } from "lucide-react"
import VideoHero from "@/components/video-hero"
import ProjectGrid from "@/components/project-grid"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoHero />

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter">
              Crafting thoughtful digital experiences through systematic design
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              I create design systems and user interfaces that balance form and function, with a focus on accessibility
              and user-centered design principles.
            </p>
            <Link href="/about" className="inline-block">
              <Button variant="ghost" className="group px-0">
                <span>Learn more about my approach</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="aspect-square bg-muted rounded-md overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Abstract representation of design process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-4">Selected Projects</h2>
            <p className="text-muted-foreground max-w-md">
              A curated selection of my recent work in UI/UX design, branding, and design systems.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group mt-4 md:mt-0">
              <span>View all projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <ProjectGrid featured={true} />
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-md">
              Thoughts and insights on design systems, user experience, and creative processes.
            </p>
          </div>
          <Link href="/articles">
            <Button variant="outline" className="group mt-4 md:mt-0">
              <span>Read all articles</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Link href={`/articles/article-${item}`} key={item} className="group">
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=500&text=Article+${item}`}
                    alt={`Article ${item} thumbnail`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">May {item + 10}, 2023</p>
                  <h3 className="text-xl font-medium mt-1">Designing Cohesive Design Systems That Scale</h3>
                  <p className="text-muted-foreground mt-2">
                    Exploring the principles behind creating flexible design systems that grow with your product.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 aspect-square bg-muted rounded-md overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=600&text=Contact"
              alt="Abstract representation of communication"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter">
              Let's create something meaningful together
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="group">
                <span>Get in touch</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
