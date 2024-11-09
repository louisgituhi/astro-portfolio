"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        feedback.trim() === ""
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [feedback])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle feedback submission here
    console.log("Feedback submitted:", feedback)
    setFeedback("")
    setIsOpen(false)
  }

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Open Feedback
      </Button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-white/10">
          <Card ref={modalRef} className="w-full max-w-md p-4 bg-primary text-primary-foreground">
            <form onSubmit={handleSubmit}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback..."
                className="min-h-[100px] w-full resize-none rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-primary-foreground/70">M+ supported</span>
                <Button 
                  type="submit" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Send
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}