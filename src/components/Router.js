import Register from '../pages/Register'
import Student1 from '../pages/Students/Student1'
import MathClass from '../pages/Classes/Math'
import ScienceClass from '../pages/Classes/Science'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
    const Layout = () => {
        return (
          <>
            <Header />
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

                        {/* Create loop */}

                        <Route path="classes/math" element={<MathClass />} />
                        <Route path="classes/science" element={<ScienceClass />} />
                        <Route path="teacherdashboard/student1" element={<Student1 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
      }

    return (
      <BrowserRoutes />
    )
}