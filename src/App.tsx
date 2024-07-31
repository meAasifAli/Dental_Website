import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import AuthLayout from './layouts/AuthLayout'
import RootLayout from './layouts/RootLayout'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Blogs from './pages/blogs/Blogs'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Route>

      <Route path='/' element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>

    </Routes>
  )
}
export default App