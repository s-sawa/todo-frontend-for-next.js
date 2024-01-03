import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Layout from '@/_layout'
// import Layout from '@/pages/_layout'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
