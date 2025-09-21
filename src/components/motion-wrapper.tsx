"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface MotionWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function MotionWrapper({ children, fallback = null }: MotionWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Re-export motion components with proper typing
export { motion, AnimatePresence }
