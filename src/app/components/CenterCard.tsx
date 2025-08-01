import React from 'react'

interface CenterCardProps {
  children: React.ReactNode
}

export default function CenterCard({ children }: CenterCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full border border-gray-200">
        {children}
      </div>
    </div>
  )
}