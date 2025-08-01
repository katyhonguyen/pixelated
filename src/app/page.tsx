// src/app/page.tsx
import CenterCard from './components/CenterCard'

export default function Home() {
  return (
    <CenterCard>
      <div className="text-center">
        <h1 className="text-1xl font-bold text-gray-500 mb-4">
          loading...
        </h1>
        <p className="text-gray-600 mb-6">
          pixelated is under construction
        </p>
        <div className="w-6 h-6 bg-gradient-to-r from-black-500 to-gray-400 rounded-full mx-auto animate-pulse"></div>
      </div>
    </CenterCard>
  )
}