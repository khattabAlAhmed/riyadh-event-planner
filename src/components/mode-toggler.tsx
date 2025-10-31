"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ModeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Always render the same structure during SSR and initial client render
  // to avoid hydration mismatch
  return (
    <Button 
      className="cursor-pointer" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      disabled={!mounted}
    >
      {mounted && theme === 'dark' ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </Button>
  )
}