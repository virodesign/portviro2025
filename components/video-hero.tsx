"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useMotionValue, useSpring, useTransform } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Mouse position for cursor effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Transform mouse position to parallax effect values
  const moveX = useTransform(springX, [-300, 300], [20, -20])
  const moveY = useTransform(springY, [-300, 300], [20, -20])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (container) {
        const rect = container.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* Video background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content with parallax effect */}
      <motion.div className="relative z-20 text-center max-w-3xl px-4" style={isMobile ? {} : { x: moveX, y: moveY }}>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Designing experiences that matter
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          UI/UX Designer specializing in design systems, branding, and accessible interfaces
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#work"
            className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors duration-300"
          >
            Explore my work
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
