"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Fintech Design System",
    category: "Design System",
    image: "/placeholder.svg?height=600&width=800&text=Fintech",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Rebrand",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800&text=E-commerce",
    featured: true,
  },
  {
    id: 3,
    title: "Health App UX",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800&text=Health",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Platform",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800&text=Travel",
    featured: false,
  },
  {
    id: 5,
    title: "Corporate Identity",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800&text=Corporate",
    featured: false,
  },
  {
    id: 6,
    title: "Component Library",
    category: "Design System",
    image: "/placeholder.svg?height=600&width=800&text=Components",
    featured: false,
  },
]

// Available filter categories
const categories = ["All", "UI/UX", "Design System", "Branding"]

interface ProjectGridProps {
  featured?: boolean
}

export default function ProjectGrid({ featured = false }: ProjectGridProps) {
  const [filter, setFilter] = useState("All")

  // Filter projects based on selected category and featured flag
  const filteredProjects = projects.filter((project) => {
    const categoryMatch = filter === "All" || project.category === filter
    const featuredMatch = !featured || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <div className="space-y-8">
      {!featured && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/projects/${project.id}`} className="group block">
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
