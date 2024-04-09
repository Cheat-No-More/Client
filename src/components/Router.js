import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import StudentDashboard from '../pages/StudentDashboard'
import TeacherDashboard from '../pages/TeacherDashboard'
import Student from '../pages/Students/Student'
import MathClass from '../pages/Classes/Math'
import ScienceClass from '../pages/Classes/Science'
import EnglishClass from '../pages/Classes/English'


import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

export default function Router() {
    const Layout = () => {
        return (
          <>
            <Header />
            <Outlet />
          </>
    
        )
      }

      const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="contact-us" element={<Contact />} />
                        <Route path="register" element={<Register />} />
                        <Route path="studentdashboard" element={<StudentDashboard />} />
                        <Route path="teacherdashboard" element={<TeacherDashboard />} />
                        <Route path="classes/math" element={<MathClass />} />
                        <Route path="classes/science" element={<ScienceClass />} />
                        <Route path="classes/english" element={<EnglishClass />} />
                        <Route path="teacherdashboard/student" element={<Student />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
      }

    return (
      <BrowserRoutes />
    )
}