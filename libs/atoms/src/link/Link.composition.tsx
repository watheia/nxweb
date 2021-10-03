import React from "react"
import { Link } from "./Link"

const Center = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  )
}

export const BaseLink = () => (
  <Center>
    <Link to="/">Home</Link>
  </Center>
)

export const BaseLinkWithExternal = () => (
  <Center>
    <Link to="https://watheia.org" data-testid="test-link">
      watheia.org
    </Link>
  </Center>
)
