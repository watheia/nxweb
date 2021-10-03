import React, { ReactNode } from "react"
import { ColorScheme } from "./ColorScheme"
import { ThemeContext } from "./theme-context"

export type ThemeProviderProps = {
  /**
   * primary color scheme of the app. Leave undefined to use system settings.
   */
  palette?: ColorScheme

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}

export function ThemeProvider({ palette, children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={{ palette }}>{children}</ThemeContext.Provider>
}
