import React, { useContext } from "react"
import { ThemeContext } from "./theme-context"
import { ColorScheme } from "./ColorScheme"

export function useTheme(palette: ColorScheme) {
  const theme = useContext(ThemeContext)
  return theme
}

export default useTheme
