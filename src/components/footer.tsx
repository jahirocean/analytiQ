"use client"

import { Github, Twitter, Youtube, Facebook, MessageCircleCode } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  resources: [
    { name: "Home", href: "#" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Preferences", href: "#" }
  ]
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Twitch", icon: Facebook, href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AnalytiQ</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span className="font-bold">AnalytiQ</span> transforms raw data into actionable insights, helping you make smarter decisions and achieve growth through expert analysis.
            </p>

           

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}

            </div>
             <div className="flex items-center gap-2 mt-2">
              <MessageCircleCode className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"/>
              <span className="text-muted-foreground hover:text-foreground transition-colors">+880 1871489154</span>
            </div>

          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          
          
          
          <div className=" max-w-md md:col-span-2 lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated on new releases and features, guides, and case studies.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
        </div>
        
        {/* Newsletter and bottom section */}
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            <div className="flex gap-4">
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 AnalytiQ. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
