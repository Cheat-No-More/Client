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
import Missing from '../pages/Missing'
import Login from '../pages/Login'
import Unauthorized from '../pages/Unauthorized'
import { Routes, Route, Outlet } from 'react-router-dom'
import RequireAuth from './RequireAuth'

const ROLES = {
  'User': 2001,
  'Student': 1984,
  'Teacher': 5150
}


export default function Router() {
    const Layout = () => {
        return (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
    
        )
      }

      const BrowserRoutes = () => {
        return (
                <Routes>
                    <Route path="/" element={<Layout />}>
                      {/* public routes */}
                        <Route path="contact-us" element={<Contact />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="unauthorized" element={<Unauthorized />} />

                      {/* private routes */}
                        <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
                        <Route path="/" element={<Home />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]}/>}>
                        <Route path="teacherdashboard" element={<TeacherDashboard />} />
                        <Route path="classes/math" element={<MathClass />} />
                        <Route path="classes/science" element={<ScienceClass />} />
                        <Route path="classes/english" element={<EnglishClass />} />
                        <Route path="teacherdashboard/student" element={<Student />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={[ROLES.Student]}/>}>
                        <Route path="studentdashboard" element={<StudentDashboard />} />
                        <Route path="classes/science" element={<ScienceClass />} />
                        <Route path="classes/english" element={<EnglishClass />} />
                        <Route path="classes/math" element={<MathClass />} />
                        </Route>

                      {/* catch all */}
                      <Route path="*" element={<Missing />} />
                    </Route>
                </Routes>
        )
      }

    return (
      <BrowserRoutes />
    )
}