import { useEffect, useRef, useState, type RefObject } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options])

  return [ref, inView]
}
