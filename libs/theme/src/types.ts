import { ReactNode } from "react"

export type ColorScheme = "light" | "dark"

export type ThemeContextType = {
  /**
   * primary color scheme of the app. Leave undefined to use system settings.
   */
  palette?: ColorScheme
}

export type ThemeProps = {
  /**
   * primary color scheme of the app. Leave undefined to use system settings.
   */
  palette?: ColorScheme

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}
