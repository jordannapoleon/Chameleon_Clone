import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  // const [isLoading, setIsLoading] = useState(false);

  return <Component {...pageProps} />
}
