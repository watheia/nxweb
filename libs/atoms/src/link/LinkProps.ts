import { HtmlHTMLAttributes } from "react"

export type LinkProps = {
  to: string
  activeClassName?: string
  partiallyActive?: boolean
} & HtmlHTMLAttributes<HTMLAnchorElement>
