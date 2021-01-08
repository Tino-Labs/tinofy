import { Layout } from '@components/common'
import { AppProps } from 'next/app'
import '../assets/styles/globals.css'
import '../assets/styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
