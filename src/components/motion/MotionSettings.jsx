import { createContext, useContext } from 'react'

export const MotionSettings = createContext(false)

export function useMotionEnabled() {
  return useContext(MotionSettings)
}
