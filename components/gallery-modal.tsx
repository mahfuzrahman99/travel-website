"use client"

import type React from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"
import CustomModal from "./custom-modal"

interface GalleryModalProps {
  children: React.ReactNode
  image: string
  title: string
  location?: string
  description?: string
}

export default function GalleryModal({ children, image, title, location, description }: GalleryModalProps) {
  return (
    <CustomModal
      trigger={children}
      className="p-0 overflow-hidden bg-transparent border-0 w-full"
      defaultWidth="70vw"
      defaultHeight="90vh"
    >
      <div className="relative flex flex-col h-full">
        <div className="relative flex-grow flex items-center justify-center bg-black/80" style={{ height: "75%" }}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
            loading="eager"
            priority
          />
        </div>
        <div className="bg-black/80 p-4 text-white overflow-y-auto scrollbar-hide" style={{ height: "25%" }}>
          <h3 className="text-xl font-semibold">{title}</h3>
          {location && (
            <div className="flex items-center mt-1 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          )}
          {description && <p className="text-sm text-white/90 mt-2">{description}</p>}
        </div>
      </div>
    </CustomModal>
  )
}
