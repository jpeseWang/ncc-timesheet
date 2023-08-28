import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProjectList } from '../pages/Project Management/pages/ProjectList/ProjectList'
import { ProjectDetail } from '../pages/Project Management/pages/ProjectDetail/ProjectDetail'
// import { ProjectManagementLayout } from '../pages/Project Management/pages/Layout/Layout'
import { MyTimesheet } from '../pages/Project Management/pages/MyTimesheet/MyTimesheet'
import { MyWorkingTime } from '../pages/Project Management/pages/MyWorkingTime/MyWorkingTime'
import { PM } from '../pages/Project Management/pages/Layout/PM'
export const FeaturesRoutes: FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<PM />} />
        <Route path="/list" element={<ProjectList />} />
        <Route path="/detail" element={<ProjectDetail />} />
        <Route path="/mytimesheet" element={<MyTimesheet />} />
        <Route path="/myworkingtime" element={<MyWorkingTime />} />
      </Routes>
    </div>
  )
}
