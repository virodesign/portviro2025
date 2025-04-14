import ProjectGrid from "@/components/project-grid"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Projects & Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Explore my portfolio of UI/UX design, branding, and design systems work. Each project represents a unique
            challenge and solution.
          </p>
        </div>

        <ProjectGrid />
      </section>
    </main>
  )
}
