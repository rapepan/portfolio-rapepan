import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true)
      return
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  if (isTouch) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden
    >
      <motion.div
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-80 h-80 rounded-full bg-violet-500/5 blur-3xl"
      />
    </motion.div>
  )
}
