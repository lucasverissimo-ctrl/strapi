"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

type SiteData = {
  title?: string
  subheading?: string
  description?: string
  button_label?: string
}

export default function NotFoundClient() {
  const pathname = usePathname() ?? "/"
  const [data, setData] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/site-data?path=${encodeURIComponent(pathname)}`)
      .then((r) => r.json())
      .then((json) => {
        setData(json)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [pathname])

  if (loading) return <div>Loading...</div>

  return (
    <main style={{ padding: 32, fontFamily: "system-ui, sans-serif" }}>
      <h1>{data?.title ?? "Not found"}</h1>
      <h2>{data?.subheading}</h2>
      <p>{data?.description}</p>
      <p><Link href="/">{data?.button_label ?? "Home"}</Link></p>
      <p style={{marginTop:16,fontSize:12}}>Path detectado: <code>{pathname}</code></p>
    </main>
  )
}
