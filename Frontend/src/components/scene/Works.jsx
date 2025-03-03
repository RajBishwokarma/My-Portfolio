import React from 'react'
import ContentBtn from '../btn/ContentBtn'

const Works = () => {
  return (
    <div className='flex flex-col items-center px-5'>
        <ContentBtn btnName="Todo ➜" routeName="todo"></ContentBtn>

        <div className="flex gap-x-3">
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <ContentBtn btnName="Home" routeName="welcome"></ContentBtn>
        <ContentBtn btnName="About Me" routeName="aboutme"></ContentBtn>
        <span className=' bg-gradient-to-t from-[#00000040] via-[#00000080] to-[#00000040] rounded-2xl h-7 w-[2px] mb-3 mt-3' />
        <ContentBtn btnName="Sign in" routeName="login"></ContentBtn>
        <ContentBtn btnName="Sign up" routeName="register"></ContentBtn>
      </div>
    </div>
  )
}

export default Works
