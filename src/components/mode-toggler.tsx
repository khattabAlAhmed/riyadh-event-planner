"use client"

import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"

export default function ModeToggler() {
  return (
    <ThemeTogglerButton
      variant="default"
      size="default"
      modes={['light', 'dark']}
      direction="ltr"
      className="cursor-pointer"
    />
  )
}