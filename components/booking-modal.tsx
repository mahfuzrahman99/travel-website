"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import CustomModal from "./custom-modal"

interface BookingModalProps {
  children: React.ReactNode
  promoCode?: string
}

export default function BookingModal({ children, promoCode }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined)
  const [appliedPromoCode, setAppliedPromoCode] = useState(promoCode || "")

  const handleApplyPromoCode = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (appliedPromoCode) {
      toast({
        title: "Promo code applied!",
        description: `Discount for code "${appliedPromoCode}" has been applied to your booking.`,
      })
    }
  }

  return (
    <CustomModal trigger={children} className="w-full" defaultWidth="50vw" defaultHeight="90vh">
      <div className="p-6 h-full overflow-y-auto scrollbar-hide">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Book Your Dream Vacation</h2>
          <p className="text-sm text-muted-foreground">
            Fill in the details below to start planning your perfect trip.
          </p>
        </div>

        <Tabs defaultValue="flight" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="flight">Flight + Hotel</TabsTrigger>
            <TabsTrigger value="hotel">Hotel Only</TabsTrigger>
            <TabsTrigger value="activity">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="flight" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Input id="from" placeholder="City or Airport" onClick={(e) => e.stopPropagation()} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input id="to" placeholder="City or Airport" onClick={(e) => e.stopPropagation()} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" onClick={(e) => e.stopPropagation()}>
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground",
                      )}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" onClick={(e) => e.stopPropagation()}>
                    <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Travelers</Label>
                <Select defaultValue="2">
                  <SelectTrigger onClick={(e) => e.stopPropagation()}>
                    <SelectValue placeholder="Select number of travelers" />
                  </SelectTrigger>
                  <SelectContent onClick={(e) => e.stopPropagation()}>
                    <SelectItem value="1">1 Traveler</SelectItem>
                    <SelectItem value="2">2 Travelers</SelectItem>
                    <SelectItem value="3">3 Travelers</SelectItem>
                    <SelectItem value="4">4 Travelers</SelectItem>
                    <SelectItem value="5">5+ Travelers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Class</Label>
                <Select defaultValue="economy">
                  <SelectTrigger onClick={(e) => e.stopPropagation()}>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent onClick={(e) => e.stopPropagation()}>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="promo-code">Promo Code</Label>
              <div className="flex gap-2">
                <Input
                  id="promo-code"
                  placeholder="Enter promo code"
                  value={appliedPromoCode}
                  onChange={(e) => setAppliedPromoCode(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <Button type="button" variant="outline" onClick={handleApplyPromoCode}>
                  Apply
                </Button>
              </div>
              {promoCode && (
                <p className="text-xs text-primary">Promo code "{promoCode}" is available for this offer!</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="hotel" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="City, Region, or Specific Hotel"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Check-in Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" onClick={(e) => e.stopPropagation()}>
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Check-out Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground",
                      )}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" onClick={(e) => e.stopPropagation()}>
                    <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Rooms</Label>
                <Select defaultValue="1">
                  <SelectTrigger onClick={(e) => e.stopPropagation()}>
                    <SelectValue placeholder="Select number of rooms" />
                  </SelectTrigger>
                  <SelectContent onClick={(e) => e.stopPropagation()}>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4+ Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Guests</Label>
                <Select defaultValue="2">
                  <SelectTrigger onClick={(e) => e.stopPropagation()}>
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent onClick={(e) => e.stopPropagation()}>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="activity-location">Location</Label>
              <Input id="activity-location" placeholder="City or Region" onClick={(e) => e.stopPropagation()} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity-type">Activity Type</Label>
              <Select defaultValue="all">
                <SelectTrigger onClick={(e) => e.stopPropagation()}>
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent onClick={(e) => e.stopPropagation()}>
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="food">Food & Drink</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" onClick={(e) => e.stopPropagation()}>
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Button type="submit" className="w-full" onClick={(e) => e.stopPropagation()}>
            Search and Book
          </Button>
        </div>
      </div>
    </CustomModal>
  )
}
