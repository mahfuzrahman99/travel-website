"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface DraggableWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function DraggableWrapper({ children, className = "" }: DraggableWrapperProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only allow dragging from the header area
    if (!(e.target as HTMLElement).closest(".modal-header")) return

    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const dx = e.clientX - dragStart.x
      const dy = e.clientY - dragStart.y

      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }))

      setDragStart({ x: e.clientX, y: e.clientY })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStart])

  return (
    <div
      ref={wrapperRef}
      className={`${className} ${isDragging ? "cursor-grabbing" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: "relative",
        zIndex: isDragging ? 60 : 50,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  )
}
