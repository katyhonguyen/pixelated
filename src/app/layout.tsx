import './globals.css'
import { Bitter } from 'next/font/google'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bitter.className} m-[20px] bg-[#FCFCFC]`}>
        <header>
          <h3>pixelated by ktypixels</h3>
        </header>
        
        <main>
          {children} {/* This is where page.tsx content goes */}
        </main>
        
        <footer>
          <p>&copy; 2025 KATY NGUYEN</p>
        </footer>
      </body>
    </html>
  )
}