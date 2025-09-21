"use client"

import { motion } from "@/components/motion-wrapper"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "next-15-4",
    title: "Next.js 15.4",
    excerpt: "Next.js 15.4 includes updates to performance, stability, and Turbopack compatibility. Highlights for this release include Turbopack Builds with 100% integration test compatibility and numerous stability improvements.",
    date: "Monday, July 14th 2025",
    authors: ["Jimmy Lai", "Zack Tanner"],
    tags: ["Release", "Performance", "Turbopack"],
    href: "/blog/next-15-4"
  },
  {
    id: "next-15-3",
    title: "Next.js 15.3",
    excerpt: "Performance improvements, bug fixes, and enhanced developer experience with the latest Next.js release.",
    date: "Monday, June 30th 2025",
    authors: ["Next.js Team"],
    tags: ["Release", "Performance", "Bug Fixes"],
    href: "/blog/next-15-3"
  },
  {
    id: "next-15-2",
    title: "Next.js 15.2",
    excerpt: "Introducing new features including improved routing, enhanced caching strategies, and better TypeScript support.",
    date: "Monday, June 16th 2025",
    authors: ["Next.js Team"],
    tags: ["Release", "Features", "TypeScript"],
    href: "/blog/next-15-2"
  }
]

export function BlogList() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-3">
            <Link href={post.href} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{post.authors.join(", ")}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <Link
              href={post.href}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
