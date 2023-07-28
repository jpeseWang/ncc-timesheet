import type { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../pages/About'
import { HeroSection } from '../pages/HeroSection'
import { Login } from '../features/authentication/pages/Login'
import { NotFound } from '../layouts/Error/NotFound'
import { Sidebar } from '../layouts/Sidebar/Sidebar'
import { Footer } from '../layouts/Footer/Footer'
import { Profile } from '../features/authentication/pages/Profile'
import { Example } from '../features/authentication/pages/Example'
import { Careers } from '../pages/Career'
import { PrivateRoute } from './PrivateRoute'
export const AppRoutes: FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/home'

  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/example" element={<Example />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isHomePage && <Footer />}
    </div>
  )
}
