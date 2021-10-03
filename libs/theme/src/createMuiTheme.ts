import { responsiveFontSizes, createTheme } from "@mui/material/styles"
import { ColorScheme } from "./types"
import { light, dark } from "./palette"

/** TODO
 * cache with hooks
 */
export const createMuiTheme = (mode: ColorScheme) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark
    })
  )

export default createMuiTheme
