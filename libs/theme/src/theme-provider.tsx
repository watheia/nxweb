import { ThemeProps } from "./types"
import { ThemeContext } from "./theme-context"

export function ThemeProvider({ palette, children }: ThemeProps) {
  return <ThemeContext.Provider value={{ palette }}>{children}</ThemeContext.Provider>
}
