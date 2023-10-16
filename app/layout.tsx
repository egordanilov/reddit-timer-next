import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle } from './styled/GlobalStyle';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
            <Header />
            {children}
            <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
