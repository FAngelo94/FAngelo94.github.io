import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { I18nProvider } from './i18n/I18nProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import CookieConsent from './components/CookieConsent/CookieConsent'

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* fallback to main for unknown routes */}
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
