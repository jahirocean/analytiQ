"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "@/components/motion-wrapper"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-xs">N</span>
            </div>
            <span className="font-semibold">Next.js</span>
          </div>
          
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/20" onClick={() => setMobileSidebarOpen(false)} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-background border-r border-border overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center">
                    <span className="text-white dark:text-black font-bold text-xs">N</span>
                  </div>
                  <span className="font-semibold">Next.js</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4">
                {/* Mobile navigation */}
                <nav className="space-y-4">
                  <Link
                    href="/"
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/docs"
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 text-primary font-medium"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    Templates
                  </Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with mobile padding */}
      <div className="pt-16 lg:pt-0">
        {children}
      </div>
    </div>
  )
}
