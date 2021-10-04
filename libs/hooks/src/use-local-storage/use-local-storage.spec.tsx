import { renderHook, act } from "@testing-library/react-hooks"
import { useLocalStorage } from "./use-local-storage"

it("should increment counter", () => {
  // mock up matchMedia impl
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

  window.localStorage.setItem("test", "42")
  const { result } = renderHook(() => useLocalStorage("test", "Bob"))
  expect(result.current[0]).toBe(42)
})
