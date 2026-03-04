import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register.jsx'
import Available from './Available.jsx'
import Students from './Students.jsx'
import UserRegister from './UserRegister.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>} />
        <Route path='/Register' element={<Register></Register>} />
        <Route path='/Students' element={<Students></Students>} />
        <Route path='/Available' element={<Available></Available>} />
        <Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
