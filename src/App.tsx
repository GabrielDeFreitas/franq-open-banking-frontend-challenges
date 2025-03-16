import '@telefonica/mistica/css/reset.css'
import '@telefonica/mistica/css/roboto.css'
import '@telefonica/mistica/css/mistica.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterProvider from './routes'
import './index.css'
import { getMovistarSkin, ThemeContextProvider } from '@telefonica/mistica'
import './i18n'

const theme = {
  skin: getMovistarSkin(),
  i18n: { locale: 'en-GB', phoneNumberFormattingRegionCode: 'ES' }
} as const

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider theme={theme}>
      <RouterProvider />
    </ThemeContextProvider>
  </StrictMode>
)
