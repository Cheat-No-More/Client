import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import StudentDashboard from '../pages/StudentDashboard'
import TeacherDashboard from '../pages/TeacherDashboard'
import Student1 from '../pages/Students/Student1'
import Student2 from '../pages/Students/Student2'
import Student3 from '../pages/Students/Student3'
import Student4 from '../pages/Students/Student4'
import Student5 from '../pages/Students/Student5'
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
            <Footer />
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
                        <Route path="teacherdashboard/student1" element={<Student1 />} />
                        <Route path="teacherdashboard/student2" element={<Student2 />} />
                        <Route path="teacherdashboard/student3" element={<Student3 />} />
                        <Route path="teacherdashboard/student4" element={<Student4 />} />
                        <Route path="teacherdashboard/student5" element={<Student5 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
      }

    return (
      <BrowserRoutes />
    )
}