import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Pages/home'
import Form from './Pages/form'
import ContactUs from './Pages/contactus'
import NotFound from './Pages/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
