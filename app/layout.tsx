import './globals.css'
import StyledComponentsRegistry from './lib/registry';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Reddit Timer',
  description: 'Find the best time to post on subreddit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
