import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Unbounded } from 'next/font/google'

const unbounded : NextFontWithVariable = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300','400', '600', '700'],
  variable: '--font-unbounded'
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${unbounded.variable} font-sans`}><Component {...pageProps} /></main>
}
