import React from "react"
import { useLocalStorage } from "./use-local-storage"

export function Example() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage("name", "Bob")
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
