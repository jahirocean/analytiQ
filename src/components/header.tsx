"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ClientOnly } from "@/components/client-only"
import { MotionWrapper } from "@/components/motion-wrapper"
import {navigation} from "@/lib/constants"
import Link from "next/link"


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Next.js</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AnalytiQ</span>
            </div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50"
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {/* Theme Toggle - Use ClientOnly wrapper for better hydration handling */}
          <ClientOnly fallback={<div className="w-24 h-8 bg-muted rounded-lg animate-pulse" />}>
            <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("light")}
                className={`h-8 w-8 p-0 ${theme === "light" ? "bg-background text-foreground" : "text-muted-foreground"}`}
              >
                <Sun className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("system")}
                className={`h-8 w-8 p-0 ${theme === "system" ? "bg-background text-foreground" : "text-muted-foreground"}`}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("dark")}
                className={`h-8 w-8 p-0 ${theme === "dark" ? "bg-background text-foreground" : "text-muted-foreground"}`}
              >
                <Moon className="h-4 w-4" />
              </Button>
            </div>
          </ClientOnly>
          
        
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      
      
          </header>

          {/* Mobile Navigation */}
          <MotionWrapper>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-background border-l border-border overflow-y-auto"
              >
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center">
                      <span className="text-white dark:text-black font-bold text-xs">A</span>
                    </div>
                    <span className="font-semibold">AnalytiQ</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="p-4">
                  {/* Mobile Navigation Links */}
                     <nav className="space-y-4 mb-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <div>
                            <button
                              className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            >
                              {item.name}
                              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 space-y-2 mt-2">
                                    {item.dropdownItems?.map((dropdownItem) => (
                                      <a
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {dropdownItem.name}
                                      </a>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="block py-2 text-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>
                  
                 
                  
                  <div className="border-t border-border pt-4 mt-4">
                    <Button variant="outline" size="sm" className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionWrapper>

    </>
  )
}
