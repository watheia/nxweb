import { renderHook, act } from "@testing-library/react-hooks/dom"
import { useDarkMode } from "./use-dark-mode"

it("should return false depending on system settings and/or localStorage (good luck tester)", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })

  const { result } = renderHook(() => useDarkMode())
  expect(result.current[0]).toBe(false)
})
