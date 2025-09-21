import { BlogList } from "@/components/blog/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-0">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Next.js Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest Next.js releases, features, and community updates.
          </p>
        </div>
        
        <BlogList />
      </div>
    </div>
  )
}
