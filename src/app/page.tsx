// src/app/page.tsx
"use client"
import { motion } from "motion/react"
import CenterCard from './components/CenterCard'

export default function Home() {
  return (
    <CenterCard>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-500 mb-4">
          loading...
        </h1>
        <p className="text-gray-600 mb-6">
          pixelated is under construction
        </p>
        <motion.div 
          className="w-4 h-4 bg-gradient-to-r from-black-400 to-gray-400 rounded-full mx-auto"
          animate={{ 
            rotate: 360,
            scale: 2
          }}
          transition={{ duration: 2 }}
        />
      </div>
    </CenterCard>
  )
}