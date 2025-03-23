
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
  const [userEmail, setUserEmail] = useState('')     // user email
  const [uiColor, setUIColor] = useState('#00000030') // Ui color
  const [loading, setLoading] = useState(false) // Render pop up while requesting

  return (
    <BrowserRouter basename="/My-Portfolio">
      <Routes>
        {/* My portfolio */}
        <Route path='/' element={<Navigate to="/welcome"/>}></Route>
        <Route element={<MainLayout uiColor={uiColor} setUIColor={setUIColor} loading={loading} />}>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/works" element={<Works isLogIn={isLogIn} setIsLogIn={setIsLogIn} setUserName={setUserName} setUserEmail={setUserEmail} />} />
          {/* Login N Register */}
          <Route path='/login' element={<Login isLogIn={isLogIn} setIsLogIn={setIsLogIn} setUserName={setUserName} setUserEmail={setUserEmail} setLoading={setLoading} />} />
          <Route path='/register' element={<Register setLoading={setLoading} />}/>
        </Route>

        {/* Todo App */}
        <Route path='/todo' element={<TodoLayout isLogIn={isLogIn} userName={userName} userEmail={userEmail} setIsLogIn={setIsLogIn} setUserName={setUserName} setUserEmail={setUserEmail} setUIColor={setUIColor} uiColor={uiColor} />}>
          <Route index element={<TodoHome isLogIn={isLogIn} userEmail={userEmail} />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<div className='text-4xl h-dvh flex items-center justify-center' style={{backgroundColor: uiColor}} ><div className="bg-white p-10 rounded-4xl">404 Page not Found!!!!</div></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

