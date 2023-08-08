import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '@/theme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppContext, AppProps } from 'next/app'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

interface Props extends AppProps {
  theme: string
}

function App({ Component, pageProps, theme }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'

    const selectedTheme = cookieTheme === 'light' ? lightTheme : (cookieTheme === 'dark') ? darkTheme : customTheme
     setCurrentTheme( selectedTheme )
  }, [])
  

  return (
    <ThemeProvider theme={ currentTheme } >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
/*
App.getInitialProps = async (appContext: AppContext) => {

  const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }

  const validTheme = ['light', 'dark', 'custom']

  return {
    theme: validTheme.includes(theme) ? theme : 'light',
  }
}
*/
export default App