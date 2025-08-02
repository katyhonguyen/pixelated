"use client"
import React from 'react'
import { motion } from 'motion/react'

interface CenterCardProps {
  children: React.ReactNode
}

export default function CenterCard({ children }: CenterCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFCFC]">
      <motion.div 
        className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full border border-gray-200 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
      >
        {children}
      </motion.div>
    </div>
  )
}