import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
