import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import BackToTop from '../components/BackToTop'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Navbar />
      <main>{children}</main>
      <BackToTop />
    </div>
  )
}
