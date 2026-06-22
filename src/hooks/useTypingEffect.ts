import { useState, useEffect } from 'react'

export function useTypingEffect(phrases: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        if (displayText.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}
