"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialModal from "./testimonial-modal"

interface TestimonialPackage {
  name: string
  date: string
  review: string
}

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  review: string
  rating: number
  packages?: TestimonialPackage[]
}

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("/testimonials.json")
        setTestimonials(res.data)
      } catch (error) {
        console.error("Failed to fetch testimonials:", error)
      }
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let interval: NodeJS.Timeout

    const startAutoScroll = () => {
      interval = setInterval(() => {
        slider.scrollLeft += 1
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0
        }
      }, 20)
    }

    startAutoScroll()

    const handleMouseEnter = () => clearInterval(interval)
    const handleMouseLeave = () => {
      if (!isDragging) startAutoScroll()
    }

    slider.addEventListener("mouseenter", handleMouseEnter)
    slider.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      slider.removeEventListener("mouseenter", handleMouseEnter)
      slider.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? "grabbing" : "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialModal
            key={testimonial.id}
            testimonial={{
              ...testimonial,
              packages: testimonial.packages || [],
            }}
          >
            <Card className="p-6 min-w-[320px] hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                {testimonial.rating % 1 !== 0 && <Star className="h-4 w-4 fill-primary text-primary opacity-50" />}
              </div>
              <p className="text-muted-foreground line-clamp-4">{testimonial.review}</p>
              <Button variant="ghost" size="sm" className="mt-4 text-primary">
                Read more
              </Button>
            </Card>
          </TestimonialModal>
        ))}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
