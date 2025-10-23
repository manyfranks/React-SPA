import './globals.css'
import StyledComponentsRegistry from './src/lib/registry'
import LayoutWrapper from './src/components/LayoutWrapper'

export const metadata = {
  title: 'React WebApp',
  description: 'Migrated from CRA to Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}