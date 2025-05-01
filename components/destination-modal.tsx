"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingModal from "./booking-modal"
import Image from "next/image"
import CustomModal from "./custom-modal"

interface DestinationModalProps {
  children: React.ReactNode
  destination: {
    name: string
    image: string
    price: string
    days: string
  }
}

export default function DestinationModal({ children, destination }: DestinationModalProps) {
  return (
    <CustomModal trigger={children} className="p-0 overflow-hidden w-full" defaultWidth="60vw" defaultHeight="90vh">
      <div className="flex flex-col h-full">
        <div className="relative h-[300px] flex-shrink-0">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Badge className="bg-primary hover:bg-primary mb-2">{destination.price}</Badge>
            <h2 className="text-3xl font-bold">{destination.name}</h2>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.days}</span>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto scrollbar-hide flex-grow">
          <div className="p-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  Experience the breathtaking beauty of {destination.name}, a destination that combines stunning
                  landscapes, rich culture, and unforgettable experiences. This {destination.days.split("-")[0]} tour
                  package includes luxury accommodations, guided tours, and authentic local experiences.
                </p>

                <h3 className="text-lg font-semibold mt-4">Highlights</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Explore iconic landmarks and hidden gems</li>
                  <li>Experience authentic local cuisine</li>
                  <li>Enjoy comfortable accommodations in prime locations</li>
                  <li>Travel with experienced local guides</li>
                  <li>All transportation within the destination included</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">What&apos;s Included</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Accommodation
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Breakfast daily
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Guided tours
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Local transportation
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Airport transfers
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> 24/7 support
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 1: Arrival</h3>
                    <p className="text-muted-foreground">
                      Arrive at your destination and transfer to your hotel. Welcome dinner and orientation.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 2: City Exploration</h3>
                    <p className="text-muted-foreground">
                      Guided tour of main attractions and landmarks. Free time in the afternoon for shopping.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 3: Cultural Experience</h3>
                    <p className="text-muted-foreground">
                      Visit local markets, participate in cultural activities, and enjoy authentic cuisine.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-lg font-semibold">Day 4-6: Adventure & Relaxation</h3>
                    <p className="text-muted-foreground">
                      Mix of adventure activities, beach time, and optional excursions based on your preferences.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4 pt-4">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-lg font-medium">4.9 out of 5</span>
                  <span className="text-muted-foreground ml-2">(128 reviews)</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      date: "March 2023",
                      rating: 5,
                      comment:
                        "Absolutely amazing experience! The guides were knowledgeable and the accommodations were top-notch.",
                    },
                    {
                      name: "Maria Garcia",
                      date: "February 2023",
                      rating: 5,
                      comment:
                        "This trip exceeded all my expectations. I'll definitely be booking with Wanderlust again!",
                    },
                    {
                      name: "David Kim",
                      date: "January 2023",
                      rating: 4,
                      comment:
                        "Great experience overall. The only minor issue was a slight delay with one of the transfers.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= review.rating ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <BookingModal>
                <Button className="flex-1">Book Now</Button>
              </BookingModal>
              <Button variant="outline" className="flex-1">
                Back to Destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
