// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// export default function Component() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [feedback, setFeedback] = useState("")
//   const modalRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node) &&
//         feedback.trim() === ""
//       ) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [feedback])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle feedback submission here
//     console.log("Feedback submitted:", feedback)
//     setFeedback("")
//     setIsOpen(false)
//   }

//   return (
//     <div className="p-4">
//       <Button onClick={() => setIsOpen(true)} variant="outline">
//         Open Feedback
//       </Button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//           <Card ref={modalRef} className="w-full max-w-md p-4">
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 placeholder="Your feedback..."
//                 className="min-h-[100px] w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//               />
//               <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
//                 <span>M+ supported</span>
//                 <Button type="submit" className="bg-black text-white hover:bg-black/90">
//                   Send
//                 </Button>
//               </div>
//             </form>
//           </Card>
//         </div>
//       )}
//     </div>
//   )
// }