
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import MainLayout from './components/layout/MainLayout'
import TodoLayout from './components/layout/TodoLayout'

// Portfolio Routes
import Welcome from './components/scene/Welcome'
import AboutMe from './components/scene/AboutMe'
import Works from './components/scene/Works'
import Login from './components/scene/Login'
import Register from './components/scene/Register'

// DW Apps
import { TodoHome } from './dw/Todo/TodoHome'


function App() {

  const [isLogIn, setIsLogIn] = useState(false)       // login
  const [userName, setUserName] = useState('Guest')   // username
  const [userEmail, setUserEmail] = useState('0')     // user email
  const [uiColor, setUIColor] = useState('#00000030') // Ui color

  return (
    <BrowserRouter basename="/My-Portfolio">
      <Routes>
        {/* My portfolio */}
        <Route path='/' element={<Navigate to="/welcome"/>}></Route>
        <Route element={<MainLayout uiColor={uiColor} setUIColor={setUIColor} />}>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/works" element={<Works/>}></Route>
          <Route path='/login' element={<Login isLogIn={isLogIn} setIsLogIn={setIsLogIn} setUserName={setUserName} setUserEmail={setUserEmail} />} />
          <Route path='/register' element={<Register/>} />
        </Route>

        {/* Login N Register */}

        {/* Todo App */}
        <Route path='/todo' element={<TodoLayout userEmail={userEmail} isLogIn={isLogIn} userName={userName} uiColor={uiColor} setUserName={setUserName} setUIColor={setUIColor} />}>
          <Route index element={<TodoHome isLogIn={isLogIn} userEmail={userEmail} />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<div className='text-4xl h-dvh flex items-center justify-center' style={{backgroundColor: uiColor}} ><div className="bg-white p-10 rounded-4xl">404 Page not Found!!!!</div></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
