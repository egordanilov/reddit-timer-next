import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle } from './styled/GlobalStyle';

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
        <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
