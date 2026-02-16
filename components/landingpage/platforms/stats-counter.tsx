// // src/components/landingpage/platforms/stats-counter.tsx (ALTERNATIVE - LEBIH BAGUS)
// "use client"

// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// interface StatCounterProps {
//   end: number
//   label: string
//   suffix?: string
//   duration?: number
// }

// export default function StatsCounter({ 
//   end, 
//   label, 
//   suffix = "", 
//   duration = 2 
// }: StatCounterProps) {
//   const [count, setCount] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => observer.disconnect()
//   }, [isVisible])

//   useEffect(() => {
//     if (!isVisible) return

//     let startTime: number
//     let animationFrame: number

//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime
//       const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

//       setCount(Math.floor(progress * end))

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate)
//       }
//     }

//     animationFrame = requestAnimationFrame(animate)

//     return () => cancelAnimationFrame(animationFrame)
//   }, [isVisible, end, duration])

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="relative group"
//     >
//       {/* Card Background */}
//       <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
        
//         {/* Gradient Background on Hover */}
//         <div className=" absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {/* Content */}
//         <div className="relative z-10 text-center">
//           <div className="text-5xl md:text-6xl font-bold mb-3">
//             <span className="rounded-full text-transparent">
//               {count.toLocaleString()}
//               {suffix}
//             </span>
//           </div>
//           <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">
//             {label}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }