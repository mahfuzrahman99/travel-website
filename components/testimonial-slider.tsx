"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The trip to Bali was absolutely amazing! Everything was well-organized, and the local guide was knowledgeable and friendly. Will definitely book with Wanderlust again!",
    rating: 5,
    packages: [
      {
        name: "Bali Explorer",
        date: "March 2023",
        review: "The perfect mix of adventure and relaxation. The villa accommodations were stunning!",
      },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Our European tour exceeded all expectations. The accommodations were luxurious, and the itinerary was perfectly balanced between guided tours and free time to explore.",
    rating: 4.5,
    packages: [
      {
        name: "European Adventure",
        date: "February 2023",
        review: "Loved the Paris segment especially. The local food tour was a highlight!",
      },
      {
        name: "Alpine Ski Getaway",
        date: "December 2022",
        review: "Great ski instructors and beautiful mountain views.",
      },
    ],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The Caribbean cruise package was the perfect honeymoon choice. The attention to detail and personalized service made our special trip even more memorable.",
    rating: 5,
    packages: [
      {
        name: "Caribbean Cruise",
        date: "January 2023",
        review: "The sunset dinner on the private beach was magical. Couldn't have asked for a better honeymoon!",
      },
    ],
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The Japan cultural tour was incredibly informative and well-paced. I appreciated the small group size and the expertise of our guide who showed us hidden gems in Kyoto.",
    rating: 5,
    packages: [
      {
        name: "Japan Explorer",
        date: "April 2023",
        review: "The traditional ryokan stay and tea ceremony were authentic experiences I'll never forget.",
      },
    ],
  },
  {
    id: 5,
    name: "Olivia Thompson",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    review:
      "My safari experience in Tanzania was life-changing. Seeing the wildlife up close in their natural habitat was breathtaking, and the luxury camping accommodations were surprisingly comfortable.",
    rating: 4.5,
    packages: [
      {
        name: "African Safari",
        date: "May 2023",
        review: "The Serengeti sunrise hot air balloon ride was worth every penny!",
      },
      {
        name: "Cape Town City Break",
        date: "May 2023",
        review: "Great addition to our safari trip. Loved Table Mountain and the penguin colony.",
      },
    ],
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Chicago, USA",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "The South America expedition was incredibly diverse, from the Inca Trail to the Amazon rainforest. The guides were passionate about conservation and taught us so much about the ecosystems.",
    rating: 5,
    packages: [
      {
        name: "Peru & Amazon Adventure",
        date: "March 2023",
        review: "Hiking the Inca Trail was challenging but rewarding. Our guide made the history come alive.",
      },
    ],
  },
]

export default function TestimonialSlider() {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let interval: NodeJS.Timeout

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 1

          // Reset to beginning when reaching the end
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0
          }
        }
      }, 20)
    }

    startAutoScroll()

    const handleMouseEnter = () => {
      clearInterval(interval)
    }

    const handleMouseLeave = () => {
      if (!isDragging) {
        startAutoScroll()
      }
    }

    slider.addEventListener("mouseenter", handleMouseEnter)
    slider.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter)
        slider.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
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
              packages: testimonial.packages || [], // Ensure packages is never undefined
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
