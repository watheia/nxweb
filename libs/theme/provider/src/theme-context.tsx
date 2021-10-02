import { createContext } from "react"
import { ColorScheme } from "./ColorScheme"

export type ThemeContextType = {
  /**
   * primary color scheme of the app. Leave undefined to use system settings.
   */
  palette?: ColorScheme
}

export const ThemeContext = createContext<ThemeContextType>({
  palette: undefined
})
