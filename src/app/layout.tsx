import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Rafał Bagrowski',
    default:
      'Rafał Bagrowski - Software developer, solopreneur, and digital nomad',
  },
  description:
    'I’m Rafał',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
    <body className="flex h-full bg-zinc-50 dark:bg-black">
    <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
    </form>
    <Providers>
      <div className="flex w-full">
        <Layout>{children}</Layout>
      </div>
    </Providers>
    </body>
    </html>
  )
}
