"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)

  // ✅ Run only on client after hydration
  useEffect(() => {
    const stored = localStorage.getItem("language")
    if (stored) setLanguage(stored)
    else setLanguage(navigator.language?.slice(0, 2) || "en")
    setMounted(true)
  }, [])

  // ✅ Avoid rendering children until client-side match is ready
  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
