import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapIcon,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ZoomIn,
} from "lucide-react"
import BookingModal from "@/components/booking-modal"
import GalleryModal from "@/components/gallery-modal"
import DestinationModal from "@/components/destination-modal"
import PackageModal from "@/components/package-modal"
import NewsletterForm from "@/components/newsletter-form"
import ContactForm from "@/components/contact-form"
import TestimonialSlider from "@/components/testimonial-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ArticleModal from "@/components/article-modal"

export default function TravelWebsite() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Beautiful travel destination"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover the World's Most Amazing Places
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Find and book your perfect trip with exclusive deals and personalized experiences tailored just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#destinations">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Destinations
                  </Button>
                </Link>
                <Link href="#offers">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    View Special Offers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">
            <div className="bg-background rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Destination</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Where to?" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-out Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="number" defaultValue="2" min="1" className="pl-9" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <BookingModal>
                  <Button className="w-full md:w-auto">Search Trips</Button>
                </BookingModal>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section id="destinations" className="py-16 bg-muted/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Destinations</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Explore our handpicked selection of the most breathtaking destinations around the globe.
                </p>
              </div>
              <Link href="/destinations" className="inline-flex items-center text-primary mt-4 md:mt-0">
                View all destinations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Santorini, Greece",
                  image:
                    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                  price: "$1,299",
                  days: "7-day tour",
                },
                {
                  name: "Bali, Indonesia",
                  image:
                    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
                  price: "$899",
                  days: "5-day tour",
                },
                {
                  name: "Kyoto, Japan",
                  image:
                    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  price: "$1,499",
                  days: "8-day tour",
                },
                {
                  name: "Machu Picchu, Peru",
                  image:
                    "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  price: "$1,899",
                  days: "10-day tour",
                },
              ].map((destination, index) => (
                <DestinationModal key={index} destination={destination}>
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                    <div className="aspect-[3/4] w-full relative">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 p-4 w-full">
                      <Badge className="bg-primary hover:bg-primary mb-2">{destination.price}</Badge>
                      <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                      <div className="flex items-center mt-1 text-white/90">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{destination.days}</span>
                      </div>
                    </div>
                  </div>
                </DestinationModal>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tour Packages */}
        <section id="packages" className="py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Popular Tour Packages</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                All-inclusive packages designed to give you the perfect travel experience without any hassle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "European Adventure",
                  image:
                    "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  days: "10 Days",
                  price: "$2,499",
                  description: "Explore the best of Europe including Paris, Rome, and Barcelona.",
                  rating: 5,
                },
                {
                  title: "Asian Discovery",
                  image:
                    "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1492&q=80",
                  days: "12 Days",
                  price: "$2,899",
                  description: "Immerse yourself in the cultures of Tokyo, Seoul, and Bangkok.",
                  rating: 4.5,
                },
                {
                  title: "Caribbean Cruise",
                  image:
                    "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
                  days: "7 Days",
                  price: "$1,699",
                  description: "Relax on pristine beaches and explore tropical islands.",
                  rating: 5,
                },
              ].map((pkg, index) => (
                <PackageModal key={index} packageData={pkg}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary">{pkg.price}</Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{pkg.title}</h3>
                        <Badge variant="outline">{pkg.days}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{pkg.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex">
                          {Array.from({ length: Math.floor(pkg.rating) }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                          {pkg.rating % 1 !== 0 && <Star className="h-4 w-4 fill-primary text-primary opacity-50" />}
                        </div>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </PackageModal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/packages">
                <Button size="lg">Browse All Packages</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-muted/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Our Premium Services</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We offer a wide range of travel services to make your journey comfortable and memorable.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Luxury Accommodations",
                  icon: "🏨",
                  description: "Stay in hand-picked luxury hotels and resorts with exceptional amenities.",
                },
                {
                  title: "Guided Tours",
                  icon: "🧭",
                  description: "Expert local guides to show you the hidden gems and cultural highlights.",
                },
                {
                  title: "Transportation",
                  icon: "🚗",
                  description: "Comfortable and reliable transportation throughout your journey.",
                },
                {
                  title: "24/7 Support",
                  icon: "📞",
                  description: "Round-the-clock customer support to assist you whenever needed.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">What Our Travelers Say</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Read authentic reviews from travelers who have experienced our services.
              </p>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">About Wanderlust Travels</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Wanderlust Travels has been helping travelers discover the world's most amazing
                  destinations for over a decade. Our mission is to create unforgettable travel experiences that
                  inspire, educate, and transform.
                </p>
                <p className="text-muted-foreground mb-6">
                  With a team of experienced travel experts and local guides, we curate journeys that go beyond the
                  typical tourist experience, allowing you to immerse yourself in local cultures and create lasting
                  memories.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <p className="text-sm text-muted-foreground">Destinations</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <p className="text-sm text-muted-foreground">Happy Travelers</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">4.9</div>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
              <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="About Wanderlust Travels"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Travel Blog */}
        <section id="blog" className="py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Travel Guides & Tips</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Get inspired with our latest travel stories, tips, and destination guides.
                </p>
              </div>
              <Link href="/blog" className="inline-flex items-center text-primary mt-4 md:mt-0">
                View all articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "10 Must-Visit Hidden Gems in Southeast Asia",
                  image:
                    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  date: "June 15, 2023",
                  category: "Destinations",
                  slug: "hidden-gems-southeast-asia",
                  content:
                    "Southeast Asia is home to countless hidden gems that are often overlooked by travelers. From secluded beaches in the Philippines to ancient temples in Myanmar, these destinations offer authentic experiences away from the tourist crowds. Discover local cuisine, traditions, and breathtaking landscapes that will make your journey truly unforgettable.",
                },
                {
                  title: "How to Pack Like a Pro: Essential Travel Tips",
                  image:
                    "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  date: "May 22, 2023",
                  category: "Travel Tips",
                  slug: "pack-like-pro",
                  content:
                    "Packing efficiently can make or break your travel experience. Learn how to maximize space, minimize weight, and ensure you have everything you need without overpacking. From choosing the right luggage to organizing your essentials, these expert tips will help you pack like a seasoned traveler for any destination or trip duration.",
                },
                {
                  title: "The Ultimate Food Guide to Italian Cuisine",
                  image:
                    "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  date: "April 10, 2023",
                  category: "Food & Culture",
                  slug: "italian-cuisine-guide",
                  content:
                    "Italian cuisine is much more than just pizza and pasta. Each region of Italy offers unique dishes and culinary traditions that reflect local ingredients and cultural influences. From the seafood specialties of Sicily to the rich risottos of Lombardy, this guide will take you on a gastronomic journey through Italy's diverse culinary landscape.",
                },
              ].map((article, index) => (
                <ArticleModal key={index} article={article}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground ml-2">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="inline-flex items-center text-sm text-primary">
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </ArticleModal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Travel Gallery</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Explore stunning photos from our travelers around the world.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
                  title: "Road Trip Adventure",
                  location: "California, USA",
                  description:
                    "A scenic drive along the Pacific Coast Highway, offering breathtaking views of the ocean and cliffs. This iconic route stretches for over 600 miles and is considered one of the most beautiful drives in the world.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  title: "Mountain Sunset View",
                  location: "Swiss Alps, Switzerland",
                  description:
                    "The majestic Swiss Alps at sunset, creating a stunning panorama of peaks and valleys. The Alps cover about 65% of Switzerland's surface area and are home to some of Europe's most iconic mountain landscapes.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  title: "Venice Canals",
                  location: "Venice, Italy",
                  description:
                    "The romantic canals of Venice, where gondolas glide through narrow waterways between historic buildings. Venice is built on 118 small islands connected by over 400 bridges, with a network of canals serving as the city's main transportation routes.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  title: "Mountain Lake Reflection",
                  location: "Banff National Park, Canada",
                  description:
                    "The crystal-clear waters of Moraine Lake in Banff National Park, reflecting the surrounding mountains. This glacially-fed lake is known for its vibrant turquoise color, which comes from the light refracting off rock flour deposited in the lake.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
                  title: "City Skyline",
                  location: "Singapore",
                  description:
                    "The futuristic skyline of Singapore, showcasing its modern architecture and urban planning. Singapore has transformed from a small fishing village to one of the world's most advanced cities in just a few decades, with iconic structures like Marina Bay Sands and Gardens by the Bay.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                  title: "Autumn in Paris",
                  location: "Paris, France",
                  description:
                    "The charming streets of Paris during autumn, when the city is adorned with golden leaves. Paris is known as the 'City of Light' and is home to world-famous landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  title: "Tropical Beach Paradise",
                  location: "Maldives",
                  description:
                    "The pristine white sand beaches and crystal-clear turquoise waters of the Maldives. This tropical nation consists of 26 atolls comprising 1,192 islands in the Indian Ocean, with many luxury resorts built on their own private islands.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                  title: "Desert Adventure",
                  location: "Sahara Desert, Morocco",
                  description:
                    "The vast sand dunes of the Sahara Desert, offering an otherworldly landscape. The Sahara is the largest hot desert in the world, covering most of North Africa. In Morocco, visitors can experience camel treks and overnight stays in traditional Berber camps.",
                },
              ].map((item, index) => (
                <GalleryModal
                  key={index}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                >
                  <div className="relative aspect-square group overflow-hidden rounded-lg cursor-pointer">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110 duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <ZoomIn className="text-white h-8 w-8 mb-2" />
                      <h4 className="text-white text-lg font-semibold text-center">{item.title}</h4>
                      <p className="text-white/80 text-sm text-center mt-1">{item.location}</p>
                      <Button variant="outline" className="mt-3 text-white border-white hover:bg-white/20">
                        View Larger
                      </Button>
                    </div>
                  </div>
                </GalleryModal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/gallery">
                <Button variant="outline">View Full Gallery</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section id="offers" className="py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Special Offers & Deals</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Take advantage of our limited-time offers and exclusive deals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Early Bird Summer Special",
                  image:
                    "https://i.ibb.co.com/3Yp6sKTc/wachapreague-7974344-1280.jpg",
                  discount: "25% OFF",
                  description: "Book your summer vacation by April 30 and get 25% off on selected destinations.",
                  code: "SUMMER25",
                },
                {
                  title: "Honeymoon Package",
                  image:
                    "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  discount: "Complimentary Upgrade",
                  description:
                    "Celebrate your love with our special honeymoon package including romantic dinners and spa treatments.",
                  code: "HONEYMOON",
                },
              ].map((offer, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl group">
                  <div className="aspect-[2/1] w-full relative">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <Badge className="self-start bg-primary hover:bg-primary mb-2 text-lg py-1.5">
                      {offer.discount}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="mb-4 text-white/90">{offer.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                      <div className="bg-white/20 px-3 py-1 rounded text-sm">
                        Promo Code: <span className="font-semibold">{offer.code}</span>
                      </div>
                      <BookingModal promoCode={offer.code}>
                        <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary">Book Now</Button>
                      </BookingModal>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6">
                Stay updated with our latest travel deals, new destinations, and inspiring travel stories.
              </p>
              <NewsletterForm />
              <p className="text-xs mt-4 text-primary-foreground/80">
                By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or need assistance? Our travel experts are here to help you plan your perfect trip.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@wanderlust-travels.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapIcon className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Travel Lane, New York, NY 10001, USA</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-muted rounded-full p-2 hover:bg-muted/80 transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-muted rounded-full p-2 hover:bg-muted/80 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-muted rounded-full p-2 hover:bg-muted/80 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="bg-muted rounded-full p-2 hover:bg-muted/80 transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <ContactForm email="info@wanderlust-travels.com" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
