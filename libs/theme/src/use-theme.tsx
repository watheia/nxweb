import React, { useContext } from "react"
import { ThemeContext } from "./theme-context"
import { ColorScheme } from "./types"

export function useTheme(palette: ColorScheme) {
  const theme = useContext(ThemeContext)
  return theme
}

export default useTheme
