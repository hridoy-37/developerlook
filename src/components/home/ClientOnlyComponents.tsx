'use client'
// This client boundary is needed because `ssr: false` is not allowed in Server Components.
// PageLoader, CursorGlow, and WhatsAppButton are client-only (no SSR).

import dynamic from 'next/dynamic'

const PageLoader = dynamic(() => import('./PageLoader'), { ssr: false })
const CursorGlow = dynamic(() => import('./CursorGlow'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false })

export default function ClientOnlyComponents() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <WhatsAppButton />
    </>
  )
}
