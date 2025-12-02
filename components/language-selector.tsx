"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (languageCode) => {
    // Extract the current locale from the pathname
    const segments = pathname.split("/")
    const currentLocale = segments[1]

    // Check if the current segment is a valid locale
    const isCurrentSegmentLocale = languages.some((lang) => lang.code === currentLocale)

    // Replace the locale segment or add it if it doesn't exist
    if (isCurrentSegmentLocale) {
      segments[1] = languageCode
    } else {
      segments.splice(1, 0, languageCode)
    }

    // Navigate to the new path
    router.push(segments.join("/"))
  }

  // Determine current language
  const currentLanguage = languages.find((lang) => pathname.startsWith(`/${lang.code}/`)) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={currentLanguage.code === language.code ? "bg-accent" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
