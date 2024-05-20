'use client'

import { QuestsProvider } from 'gamesocial-react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <QuestsProvider
        apiKey={process.env.NEXT_PUBLIC_GS_PUBLIC_KEY ?? ''}
        apiUrl={process.env.NEXT_PUBLIC_GS_API_URL ?? ''}
      >
        {children}
      </QuestsProvider>
  )
}
