import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../style/global'
import { ThemeProvider } from 'styled-components'
import theme from '../style/theme'

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
}

export default MyApp
