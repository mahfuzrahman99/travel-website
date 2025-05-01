"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CustomModalProps {
  children: React.ReactNode
  trigger: React.ReactNode
  className?: string
  defaultWidth?: string // Default width can be specified
  defaultHeight?: string // Default height can be specified
}

export default function CustomModal({
  children,
  trigger,
  className = "",
  defaultWidth = "50vw",
  defaultHeight = "90vh",
}: CustomModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 })
  const [resizeDirection, setResizeDirection] = useState({ x: 0, y: 0 })
  const modalRef = useRef<HTMLDivElement>(null)

  // Initialize modal size when it opens
  useEffect(() => {
    if (isOpen && modalRef.current && size.width === 0) {
      // Use the default width/height or the actual element size
      const rect = modalRef.current.getBoundingClientRect()
      const computedStyle = window.getComputedStyle(modalRef.current)

      // Get the numeric value from defaultWidth/defaultHeight if they're percentages
      const getNumericValue = (value: string) => {
        if (value.endsWith("vw")) {
          return (Number.parseFloat(value) / 100) * window.innerWidth
        } else if (value.endsWith("vh")) {
          return (Number.parseFloat(value) / 100) * window.innerHeight
        } else if (value.endsWith("px")) {
          return Number.parseFloat(value)
        }
        return Number.parseFloat(value)
      }

      const width = computedStyle.width === "auto" ? getNumericValue(defaultWidth) : rect.width
      const height = computedStyle.height === "auto" ? getNumericValue(defaultHeight) : rect.height

      setSize({ width, height })
      setInitialSize({ width, height })
    }
  }, [isOpen, size.width, defaultWidth, defaultHeight])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent dragging when clicking on buttons or inputs
    if (
      (e.target as HTMLElement).tagName === "BUTTON" ||
      (e.target as HTMLElement).tagName === "INPUT" ||
      (e.target as HTMLElement).tagName === "A" ||
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest("input") ||
      (e.target as HTMLElement).closest("a") ||
      (e.target as HTMLElement).closest("[role='dialog']") ||
      (e.target as HTMLElement).closest("[role='listbox']") ||
      (e.target as HTMLElement).closest("[role='combobox']")
    ) {
      return
    }

    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
    e.preventDefault()
  }

  // Handle resizing
  const handleResizeMouseDown = (e: React.MouseEvent, direction: { x: number; y: number }) => {
    setIsResizing(true)
    setResizeStart({ x: e.clientX, y: e.clientY })
    setResizeDirection(direction)
    e.stopPropagation()
    e.preventDefault()
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - dragStart.x
        const dy = e.clientY - dragStart.y

        setPosition((prev) => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }))

        setDragStart({ x: e.clientX, y: e.clientY })
      } else if (isResizing) {
        const dx = e.clientX - resizeStart.x
        const dy = e.clientY - resizeStart.y

        setSize((prev) => ({
          width: Math.max(300, prev.width + dx * resizeDirection.x),
          height: Math.max(200, prev.height + dy * resizeDirection.y),
        }))

        setResizeStart({ x: e.clientX, y: e.clientY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, dragStart, resizeStart, resizeDirection])

  // Reset position and size when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPosition({ x: 0, y: 0 })
      setSize({ width: 0, height: 0 })
    }
  }, [isOpen])

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div
            ref={modalRef}
            className={`bg-background rounded-lg shadow-lg overflow-hidden ${className} relative`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              width: size.width ? `${size.width}px` : defaultWidth,
              height: size.height ? `${size.height}px` : defaultHeight,
              cursor: isDragging ? "grabbing" : "grab",
              transition: isDragging || isResizing ? "none" : "transform 0.1s ease",
              maxHeight: "90vh",
              maxWidth: "90vw",
            }}
            onMouseDown={handleMouseDown}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-20"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Resize handles */}
            <div
              className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: 1, y: 1 })}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" className="absolute bottom-1 right-1" fill="currentColor">
                <path d="M0 10L10 10L10 0Z" opacity="0.2" />
                <path d="M1 9L9 9L9 1Z" opacity="0.4" />
                <path d="M2 8L8 8L8 2Z" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute bottom-0 left-0 w-6 h-6 cursor-sw-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: -1, y: 1 })}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="absolute bottom-1 left-1"
                fill="currentColor"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="M0 10L10 10L10 0Z" opacity="0.2" />
                <path d="M1 9L9 9L9 1Z" opacity="0.4" />
                <path d="M2 8L8 8L8 2Z" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute top-0 right-0 w-6 h-6 cursor-ne-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: 1, y: -1 })}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="absolute top-1 right-1"
                fill="currentColor"
                style={{ transform: "scaleY(-1)" }}
              >
                <path d="M0 10L10 10L10 0Z" opacity="0.2" />
                <path d="M1 9L9 9L9 1Z" opacity="0.4" />
                <path d="M2 8L8 8L8 2Z" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute top-0 left-0 w-6 h-6 cursor-nw-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: -1, y: -1 })}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="absolute top-1 left-1"
                fill="currentColor"
                style={{ transform: "scale(-1)" }}
              >
                <path d="M0 10L10 10L10 0Z" opacity="0.2" />
                <path d="M1 9L9 9L9 1Z" opacity="0.4" />
                <path d="M2 8L8 8L8 2Z" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute top-0 w-full h-6 cursor-n-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: 0, y: -1 })}
            ></div>
            <div
              className="absolute bottom-0 w-full h-6 cursor-s-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: 0, y: 1 })}
            ></div>
            <div
              className="absolute left-0 h-full w-6 cursor-w-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: -1, y: 0 })}
            ></div>
            <div
              className="absolute right-0 h-full w-6 cursor-e-resize z-20"
              onMouseDown={(e) => handleResizeMouseDown(e, { x: 1, y: 0 })}
            ></div>

            {/* Reset button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-2 z-20"
              onClick={(e) => {
                e.stopPropagation()
                setPosition({ x: 0, y: 0 })
                setSize(initialSize)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span className="sr-only">Reset position</span>
            </Button>

            {/* Content with hidden scrollbar */}
            <div className="h-full overflow-y-auto scrollbar-hide">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}
