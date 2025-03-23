import React from 'react'
import ContentBtn from '../btn/ContentBtn'
import { logoutLogic } from '../../logics/rlLogic'

const Works = (props) => {

  const {isLogIn, setIsLogIn, setUserName, setUserEmail} = props

  const handleLogout = () => { // Handles Logout
    logoutLogic(setIsLogIn, setUserName, setUserEmail)  
  }
  
  return (
    <div className='flex flex-col items-center px-5'>
        <ContentBtn btnName="Todo ➜" routeName="todo"></ContentBtn>

        <div className="flex gap-x-3">
      </div>
      <div className="flex justify-center items-center gap-x-3 max-[545px]:flex-col">
        <ContentBtn btnName="Home" routeName="welcome"></ContentBtn>
        <ContentBtn btnName="About Me" routeName="aboutme"></ContentBtn>
        <span className=' bg-gradient-to-t from-[#00000040] via-[#00000080] to-[#00000040] rounded-2xl h-7 w-[2px] my-3
              max-[545px]:w-full max-[545px]:hidden max-[545px]:m1y-0' />
        {isLogIn?<>     
          <button className="relative group p-1 text-lg font-semibold text-gray-600 hover:text-black transition-colors duration-200"
              onClick={handleLogout}>
            Logout
            <span className="absolute left-0 right-0 bottom-1 h-0.5 bg-black scale-x-0 transition-transform duration-300 
              group-hover:scale-x-100 group-active:bg-violet-500 "/>
          </button>
        </>:<>
            <ContentBtn btnName="Sign in" routeName="login"></ContentBtn>
            <ContentBtn btnName="Sign up" routeName="register"></ContentBtn>
        </>}
      </div>
    </div>
  )
}

export default Works
