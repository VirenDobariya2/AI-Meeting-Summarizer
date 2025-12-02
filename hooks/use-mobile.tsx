// hooks/use-is-mobile.ts
import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues in Next.js)
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Initial check
    setIsMobile(mediaQuery.matches)

    // Add event listener
    mediaQuery.addEventListener("change", handleChange)

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}
