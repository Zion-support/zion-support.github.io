import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { PerformanceMonitor } from '../components/performance/PerformanceMonitor'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <PerformanceMonitor />
    </ErrorBoundary>
  )
}