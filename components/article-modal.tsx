"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Share2, Bookmark, ArrowLeft } from "lucide-react"
import CustomModal from "./custom-modal"

interface Article {
  title: string
  image: string
  date: string
  category: string
  slug: string
  content: string
}

interface ArticleModalProps {
  children: React.ReactNode
  article: Article
}

// Sample related articles data
const relatedArticles = [
  {
    title: "Best Time to Visit Popular Destinations",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "May 5, 2023",
    category: "Travel Tips",
    slug: "best-time-to-visit",
    content:
      "Timing is everything when planning a trip. This guide breaks down the best seasons to visit popular destinations around the world, taking into account weather patterns, tourist crowds, and special events. Learn when to find the perfect balance of good weather and fewer tourists for your dream destination.",
  },
  {
    title: "Budget Travel: How to Save on Accommodations",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 18, 2023",
    category: "Budget Travel",
    slug: "save-on-accommodations",
    content:
      "Accommodation often represents the largest expense in a travel budget. This article explores various strategies to save money on lodging without sacrificing comfort or safety. From hostels and home exchanges to loyalty programs and off-season bookings, discover how to stretch your travel budget further.",
  },
]

export default function ArticleModal({ children, article: initialArticle }: ArticleModalProps) {
  const [article, setArticle] = useState(initialArticle)
  const [previousArticles, setPreviousArticles] = useState<Article[]>([])

  const handleRelatedArticleClick = (relatedArticle: Article) => {
    setPreviousArticles([...previousArticles, article])
    setArticle(relatedArticle)
  }

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (previousArticles.length > 0) {
      const prevArticles = [...previousArticles]
      const lastArticle = prevArticles.pop()
      setArticle(lastArticle!)
      setPreviousArticles(prevArticles)
    }
  }

  return (
    <CustomModal trigger={children} className="p-0 overflow-hidden w-full" defaultWidth="60vw" defaultHeight="90vh">
      <div className="flex flex-col h-full">
        <div className="relative h-[300px] flex-shrink-0">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Badge className="mb-2">{article.category}</Badge>
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <div className="flex items-center mt-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{article.date}</span>
            </div>
          </div>
          {previousArticles.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 left-4 bg-black/30 text-white hover:bg-black/50"
              onClick={handleBackClick}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          )}
        </div>

        <div className="p-6 overflow-y-auto scrollbar-hide flex-grow">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">5 min read</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">{article.content}</p>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">What to Expect</h3>
            <p className="text-muted-foreground mb-4">
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Travelers</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Bring comfortable walking shoes and weather-appropriate clothing</li>
              <li>Research local customs and etiquette before your trip</li>
              <li>Learn a few basic phrases in the local language</li>
              <li>Always have a copy of important documents</li>
              <li>Stay hydrated and protect yourself from the sun</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Nulla facilisi. Mauris efficitur, massa et iaculis accumsan, mauris magna euismod magna, at pellentesque
              massa ex non purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <div className="grid grid-cols-2 gap-4">
              {relatedArticles.map((relatedArticle, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRelatedArticleClick(relatedArticle)
                  }}
                >
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{relatedArticle.title}</h4>
                    <p className="text-xs text-muted-foreground">{relatedArticle.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
