import type { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { About } from '../pages/About'
import { HeroSection } from '../pages/HeroSection'
import { Login } from '../features/authentication/pages/Login'
import { NotFound } from '../layouts/Error/NotFound'
import { Sidebar } from '../layouts/Sidebar/Sidebar'
import { Footer } from '../layouts/Footer/Footer'

export const AppRoutes: FC = () => {
  const location = useLocation()

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/home'

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Sidebar />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  )
}
