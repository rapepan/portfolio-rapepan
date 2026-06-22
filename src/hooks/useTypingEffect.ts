import { useState, useEffect, useRef } from 'react'

export function useTypingEffect(phrases: string[], typingSpeed = 120, deletingSpeed = 30, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isPaused) return

    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        } else {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1))
        }
      } else {
        const next = currentPhrase.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === currentPhrase) {
          setIsPaused(true)
          pauseRef.current = setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, pauseDuration)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  useEffect(() => {
    return () => { if (pauseRef.current) clearTimeout(pauseRef.current) }
  }, [])

  return displayText
}
