import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@watheia/theme.provider"

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import "@watheia/theme.styles.global/index.css"
import SEO from "./SEO"
import { ReactNode } from "react"

export type TopLayoutProps = {
  children: ReactNode | ReactNode[]
}

export function TopLayout(props: TopLayoutProps) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;display=swap"
          rel="stylesheet"
        />
        <SEO />
      </Helmet>
      <ThemeProvider>{props.children}</ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}

export default TopLayout
