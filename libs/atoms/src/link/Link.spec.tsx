import React from "react"
import { render } from "@testing-library/react"
import { BaseLink, BaseLinkWithExternal } from "./Link.composition"

describe("Link Component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<BaseLink />)
    const rendered = getByText("Home")
    expect(rendered).toBeInstanceOf(HTMLElement)
  })
  it("should render with target blank", () => {
    const { getByTestId } = render(<BaseLinkWithExternal />)
    const rendered = getByTestId("test-link")

    expect(rendered.tagName).toEqual("A")
    expect(rendered.getAttribute("target")).toEqual("_blank")
  })
})
