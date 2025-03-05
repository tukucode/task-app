import './globals.css'
import type { Metadata } from 'next'

import { Roboto, Roboto_Mono } from 'next/font/google'
import { APP_NAME, APP_DESCRIPTION, PUBLIC_SERVER_URL } from '@/lib/constants'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(PUBLIC_SERVER_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
