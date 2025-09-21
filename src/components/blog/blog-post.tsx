"use client";

import { motion } from "@/components/motion-wrapper";
import {
  ArrowLeft,
  Calendar,
  User,
  Github,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function BlogPost() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Back to Blog */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <span>Monday, July 14th 2025</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Next.js 15.4
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Posted by</span>
          </div>
          <div className="flex gap-2">
            <span className="text-foreground font-medium">Jimmy Lai</span>
            <span>@feedthejim</span>
          </div>
          <span>•</span>
          <div className="flex gap-2">
            <span className="text-foreground font-medium">Zack Tanner</span>
            <span>@zt1072</span>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg max-w-none"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Next.js 15.4 includes updates to performance, stability, and Turbopack
          compatibility. Highlights for this release include:
        </p>

        <ul className="space-y-2 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">•</span>
            <span>
              <strong>Turbopack Builds</strong>: 100% integration test
              compatibility for{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">
                next build --turbopack
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">•</span>
            <span>
              <strong>Stability Improvements</strong>: Numerous stability and
              performance improvements to Next.js and Turbopack
            </span>
          </li>
        </ul>

        <p className="mb-8">
          This blog post also includes an early preview of what's coming in
          Next.js 16, our next major release.
        </p>

        <div className="bg-muted/30 rounded-2xl p-8 border border-border mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Upgrade today, or get started with:
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Terminal</h3>
              <div className="bg-background rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2">
                  # Use the automated upgrade CLI
                </div>
                <div className="text-foreground">
                  npx @next/codemod@canary upgrade latest
                </div>
                <div className="text-muted-foreground mt-2">
                  # ...or upgrade manually
                </div>
                <div className="text-foreground">
                  npm install next@latest react@latest react-dom@latest
                </div>
                <div className="text-muted-foreground mt-2">
                  # ...or start a new project
                </div>
                <div className="text-foreground">
                  npx create-next-app@latest
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Turbopack Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Turbopack Builds
          </h2>
          <p className="mb-4">
            <code className="bg-muted px-2 py-1 rounded text-sm">
              next build --turbopack
            </code>{" "}
            now passes <strong>all 8298 integration tests</strong> for
            production builds and now powers{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm">
              vercel.com
            </code>
            . This is a crucial milestone towards marking Turbopack in Next.js
            stable.
          </p>
          <p className="mb-4">
            The team's current priority is to finish the swing on bundling
            optimizations via production chunking and to fix reported bugs from
            early adopters of the Alpha release. We've also made numerous
            stability and performance improvements to Turbopack under the hood.
          </p>
          <p className="mb-4">
            We are confident that Turbopack will soon be ready for production
            use, and we're working towards a beta release in Next.js 16. If you
            had tried Turbopack previously, now is a good time to try again. If
            you run into any issues let us know on GitHub Issues.
          </p>
        </section>

        {/* Next.js 16 Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Looking Ahead: Next.js 16
          </h2>
          <p className="mb-4">
            Over the past few months, we've been iterating on major improvements
            to Next.js, focusing on both the developer experience with Turbopack
            and the core capacities of the App Router with{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm">PPR</code> and{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm">
              use cache
            </code>
            . While we are not ready to enable those features on by default, we
            are looking to lay the groundwork for our users to try it out in
            Next.js 16 this summer.
          </p>

          <p className="mb-4">
            Here's a preview of what's coming in Next.js 16:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>Cache Components (beta)</strong>: Consolidates
                experimental caching features (Dynamic IO,{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">
                  use cache
                </code>
                , and Partial Prerendering) into a unified{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">
                  cacheComponents
                </code>{" "}
                flag, simplifying performance optimization strategies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>Turbopack Builds (beta)</strong>: Introduces{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">
                  next build --turbopack
                </code>
                , fully passing integration tests, and validated internally on
                high-traffic sites like vercel.com.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>Optimized Client-Side Routing</strong>: Enhances App
                Router navigation with smarter prefetching, improved cache
                invalidation strategies, and reduced bandwidth usage.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>DevTools & Debugging</strong>: Adds Route Info to
                inspect app structure and toggle components like{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">
                  loading.tsx
                </code>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>Node.js Middleware (stable)</strong>: Promotes the
                previously experimental Node.js runtime support for Middleware
                to stable status.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>
                <strong>Deployment Adapters (alpha)</strong>: Enables developers
                to create custom deployment adapters for finer control over
                build and deploy targets.
              </span>
            </li>
          </ul>
        </section>

        {/* Configuration Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Preview Upcoming Features
          </h2>
          <p className="mb-4">
            You can start experimenting with many of these features today by
            using the{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm">canary</code>{" "}
            channel and enabling the following flags in your{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm">
              next.config.js
            </code>
            :
          </p>

          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-foreground">next.config.ts</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Forward browser logs to the terminal for easier debugging
    browserDebugInfoInTerminal: true,

    // Enable new caching and pre-rendering behavior
    dynamicIO: true, // will be renamed to cacheComponents in Next.js 16

    // Activate new client-side router improvements
    clientSegmentCache: true,

    // Explore route composition and segment overrides via DevTools
    devtoolSegmentExplorer: true,

    // Enable support for \`global-not-found\`, which allows you to more easily define a global 404 page.
    globalNotFound: true,

    // Enable persistent caching for the turbopack dev server and build.
    turbopackPersistentCaching: true,
  },
};

export default nextConfig;`)
                }
                className="text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            <pre className="bg-background rounded-lg p-4 text-sm overflow-x-auto">
              <code>{`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Forward browser logs to the terminal for easier debugging
    browserDebugInfoInTerminal: true,

    // Enable new caching and pre-rendering behavior
    dynamicIO: true, // will be renamed to cacheComponents in Next.js 16

    // Activate new client-side router improvements
    clientSegmentCache: true,

    // Explore route composition and segment overrides via DevTools
    devtoolSegmentExplorer: true,

    // Enable support for \`global-not-found\`, which allows you to more easily define a global 404 page.
    globalNotFound: true,

    // Enable persistent caching for the turbopack dev server and build.
    turbopackPersistentCaching: true,
  },
};

export default nextConfig;`}</code>
            </pre>
          </div>
        </section>

        {/* Notable Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Notable Changes
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-semibold">
                [Improvement]
              </span>
              <span>Preserve RSC query during redirects (#77963)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-semibold">
                [Improvement]
              </span>
              <span>Graceful error fallback for bots (#77916)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-semibold">
                [Improvement]
              </span>
              <span>
                Disallow{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  unstable_rootParams
                </code>{" "}
                in client components (#79471)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-semibold">[Feature]</span>
              <span>
                Add{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  onInvalidate
                </code>{" "}
                to{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  router.prefetch
                </code>{" "}
                (#77880)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-semibold">[Feature]</span>
              <span>
                Add{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  prefetch="auto"
                </code>{" "}
                as an alias to{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  prefetch={undefined}
                </code>{" "}
                to Link (#78689)
              </span>
            </li>
          </ul>
        </section>

        {/* Community Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Share your feedback and help shape the future of Next.js:
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub Discussions
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="mr-2 h-4 w-4" />
              GitHub Issues
            </Button>
          </div>
        </section>

        {/* Contributors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Contributors
          </h2>
          <p className="mb-4">
            Next.js is the result of the combined work of over 3,000 individual
            developers. This release was brought to you by:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                The Next.js team:
              </h3>
              <p className="text-muted-foreground">
                Andrew, Ben, Hendrik, Janka, Jiachi, Jimmy, Jiwon, JJ, Josh,
                Jude, Rob, Sam, Sebastian, Sebbie, Wyatt, and Zack.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                The Turbopack team:
              </h3>
              <p className="text-muted-foreground">
                Benjamin, Donny, Josh, Luke, Maia, Niklas, Tim, Tobias, and
                Will.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                The Next.js Docs team:
              </h3>
              <p className="text-muted-foreground">
                Delba, Rich, Ismael, Joseph, and Lee.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Huge thanks to all the contributors who helped make this release
            possible!
          </p>
        </section>
      </motion.div>
    </div>
  );
}
