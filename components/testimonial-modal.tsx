"use client"

import type React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Package, Calendar, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BookingModal from "./booking-modal"
import CustomModal from "./custom-modal"

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
  packages: TestimonialPackage[]
}

interface TestimonialModalProps {
  children: React.ReactNode
  testimonial: Testimonial
}

export default function TestimonialModal({ children, testimonial }: TestimonialModalProps) {
  // Ensure packages is always an array
  const packages = testimonial.packages || []

  return (
    <CustomModal trigger={children} className="w-full" defaultWidth="40vw" defaultHeight="90vh">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6 flex-shrink-0 p-6 pt-10">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name || "Testimonial"}
              fill
              className="object-cover"
              loading="eager"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{testimonial.name}</h2>
            <p className="text-muted-foreground">{testimonial.location}</p>
            <div className="flex mt-1">
              {Array.from({ length: Math.floor(testimonial.rating || 0) }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              {testimonial.rating % 1 !== 0 && <Star className="h-4 w-4 fill-primary text-primary opacity-50" />}
            </div>
          </div>
        </div>

        <Tabs defaultValue="review" className="flex-grow overflow-hidden flex flex-col px-6">
          <TabsList className="grid w-full grid-cols-2 flex-shrink-0">
            <TabsTrigger value="review">Review</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>
          <div className="overflow-y-auto flex-grow scrollbar-hide">
            <TabsContent value="review" className="pt-4 h-full">
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <Quote className="h-8 w-8 text-primary/30 mb-2" />
                <p className="italic text-muted-foreground">{testimonial.review}</p>
              </div>
            </TabsContent>
            <TabsContent value="packages" className="pt-4 h-full">
              <div className="space-y-4 pb-6">
                <h3 className="text-lg font-semibold">Packages Experienced</h3>
                {packages.map((pkg, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Package className="h-4 w-4 mr-2 text-primary" />
                        <h4 className="font-medium">{pkg.name}</h4>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {pkg.date}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{pkg.review}</p>
                    <div className="flex justify-end">
                      <BookingModal>
                        <Button size="sm" variant="outline">
                          Book This Package
                        </Button>
                      </BookingModal>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </CustomModal>
  )
}
