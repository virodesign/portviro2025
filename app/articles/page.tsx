import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Sample article data
const articles = [
  {
    id: 1,
    title: "Designing Cohesive Design Systems That Scale",
    excerpt: "Exploring the principles behind creating flexible design systems that grow with your product.",
    date: "May 12, 2023",
    category: "Design Systems",
    image: "/placeholder.svg?height=300&width=500&text=Article+1",
  },
  {
    id: 2,
    title: "The Role of Motion in Modern UI Design",
    excerpt: "How thoughtful animation and motion design can enhance user experience and guide interactions.",
    date: "April 28, 2023",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500&text=Article+2",
  },
  {
    id: 3,
    title: "Accessibility First: Designing for Everyone",
    excerpt:
      "Why accessibility should be a core consideration from the start of the design process, not an afterthought.",
    date: "March 15, 2023",
    category: "Accessibility",
    image: "/placeholder.svg?height=300&width=500&text=Article+3",
  },
  {
    id: 4,
    title: "From Concept to Implementation: A Design Case Study",
    excerpt: "A detailed look at the process of taking a design from initial concept through to development handoff.",
    date: "February 22, 2023",
    category: "Case Study",
    image: "/placeholder.svg?height=300&width=500&text=Article+4",
  },
  {
    id: 5,
    title: "The Psychology of Color in UI Design",
    excerpt: "Understanding how color choices affect user perception and behavior in digital interfaces.",
    date: "January 10, 2023",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500&text=Article+5",
  },
  {
    id: 6,
    title: "Building a Design-Driven Culture in Organizations",
    excerpt: "Strategies for fostering a culture that values and prioritizes good design practices.",
    date: "December 5, 2022",
    category: "Design Leadership",
    image: "/placeholder.svg?height=300&width=500&text=Article+6",
  },
]

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Articles & Insights</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts and perspectives on design systems, user experience, and creative processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id} className="group">
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={`${article.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-sm font-medium group-hover:text-primary transition-colors">
                    <span>Read article</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
