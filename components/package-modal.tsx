"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingModal from "./booking-modal"
import Image from "next/image"
import CustomModal from "./custom-modal"

interface PackageModalProps {
  children: React.ReactNode
  packageData: {
    title: string
    image: string
    days: string
    price: string
    description: string
    rating: number
  }
}

export default function PackageModal({ children, packageData }: PackageModalProps) {
  return (
    <CustomModal trigger={children} className="p-0 overflow-hidden w-full" defaultWidth="60vw" defaultHeight="90vh">
      <div className="flex flex-col h-full">
        <div className="relative h-[300px] flex-shrink-0">
          <Image
            src={packageData.image || "/placeholder.svg"}
            alt={packageData.title}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Badge className="bg-primary hover:bg-primary mb-2">{packageData.price}</Badge>
            <h2 className="text-3xl font-bold">{packageData.title}</h2>
            <div className="flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{packageData.days}</span>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto scrollbar-hide flex-grow">
          <div className="p-6">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  {packageData.description} This comprehensive package is designed to give you the perfect balance of
                  guided exploration and free time to discover on your own.
                </p>

                <h3 className="text-lg font-semibold mt-4">Package Highlights</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>All-inclusive {packageData.days} experience</li>
                  <li>4-5 star accommodations throughout your journey</li>
                  <li>Expert local guides and tour directors</li>
                  <li>Small group sizes for a personalized experience</li>
                  <li>Authentic cultural experiences and activities</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">What&apos;s Included</h3>
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Luxury accommodations
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Daily breakfast
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Selected lunches & dinners
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> All transportation
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Entrance fees
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Professional guides
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> Airport transfers
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" /> 24/7 support
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 1-2: Arrival & Orientation</h3>
                    <p className="text-muted-foreground">
                      Arrive at your destination, transfer to your hotel, and enjoy a welcome dinner. The next day
                      includes a guided tour of the main city attractions.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 3-5: Cultural Immersion</h3>
                    <p className="text-muted-foreground">
                      Visit historical sites, participate in local workshops, and enjoy authentic cuisine. Includes day
                      trips to nearby attractions.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="text-lg font-semibold">Day 6-8: Adventure & Exploration</h3>
                    <p className="text-muted-foreground">
                      Experience outdoor activities, natural wonders, and optional excursions based on your preferences.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-lg font-semibold">Day 9-10: Relaxation & Departure</h3>
                    <p className="text-muted-foreground">
                      Enjoy leisure time, last-minute shopping, and a farewell dinner before your departure transfer.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="pricing" className="space-y-4 pt-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">Standard Package</h3>
                  <div className="text-2xl font-bold text-primary mt-1">{packageData.price}</div>
                  <p className="text-sm text-muted-foreground mt-1">per person, based on double occupancy</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> 4-star accommodations
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> All guided tours
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> Daily breakfast
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> Selected meals
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold">Premium Package</h3>
                  <div className="text-2xl font-bold text-primary mt-1">
                    ${Number.parseInt(packageData.price.substring(1)) + 500}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">per person, based on double occupancy</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> 5-star luxury accommodations
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> Private guided tours
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> All meals included
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> Premium experiences
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" /> VIP airport transfers
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  * Prices do not include international airfare, travel insurance, or personal expenses.
                </p>
              </TabsContent>
              <TabsContent value="users" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recent Travelers</h3>
                  {[
                    {
                      name: "Sarah Johnson",
                      location: "New York, USA",
                      image: "https://randomuser.me/api/portraits/women/44.jpg",
                      date: "March 2023",
                      comment: "The perfect mix of adventure and relaxation. The accommodations were stunning!",
                    },
                    {
                      name: "Michael Chen",
                      location: "Toronto, Canada",
                      image: "https://randomuser.me/api/portraits/men/32.jpg",
                      date: "February 2023",
                      comment: "Loved every moment of this trip. The local food tour was a highlight!",
                    },
                    {
                      name: "Emma Rodriguez",
                      location: "London, UK",
                      image: "https://randomuser.me/api/portraits/women/68.jpg",
                      date: "January 2023",
                      comment:
                        "The sunset dinner on the private beach was magical. Couldn't have asked for a better experience!",
                    },
                  ].map((user, index) => (
                    <div key={index} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{user.name}</h4>
                          <span className="text-xs text-muted-foreground">{user.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          {user.location}
                        </div>
                        <p className="text-sm text-muted-foreground">{user.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <BookingModal>
                <Button className="flex-1">Book This Package</Button>
              </BookingModal>
              <Button variant="outline" className="flex-1">
                Back to Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
