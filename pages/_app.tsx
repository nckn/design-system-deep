import '@aws-amplify/ui-react/styles.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import TransitionEffect1 from "../src/components/TransitionEffect1";

import './api'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransitionEffect1>
      <Component {...pageProps} />
    </TransitionEffect1>
  )
}

export default MyApp
