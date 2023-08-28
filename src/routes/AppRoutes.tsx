import type { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../layouts/About'
import { HeroSection } from '../layouts/HeroSection'
import { Login } from '../pages/authentication/pages/Login'
import { NotFound } from '../components/Error/NotFound'
import { Footer } from '../components/Footer/Footer'
import { Profile } from '../pages/authentication/pages/Profile'
import { Careers } from '../layouts/Career'
import { PrivateRoute } from './PrivateRoute'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { ProjectList } from '../pages/Project Management/pages/ProjectList/ProjectList'
import { ProjectDetail } from '../pages/Project Management/pages/ProjectDetail/ProjectDetail'
import { FeaturesRoutes } from './FeaturesRoutes'
export const AppRoutes: FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname.startsWith('/home')

  return (
    <div>
      <Routes>
        <Route
          path="/home/*"
          element={
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>
          }
        />
        <Route path="projects/*" element={<FeaturesRoutes />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/list" element={<ProjectList />} />
        <Route path="/detail" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isHomePage && <Footer />}
    </div>
  )
}
