"use client"
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <div className="">
     
      <div className="pt-20">
        {children}
      </div>
    </div>
  )
}
