import React from 'react'
import ContentBtn from '../btn/ContentBtn'

const Welcome = () => {
  return (
    <div className='flex flex-col'>
        <div className='text-4xl my-5 '>Hello, I'm Raj Bishwakarma.</div>
        <hr className="h-px my-2 bg-gray-200 border-0"></hr>
        <div className='text-2xl my-5'>Welcome to my Portfolio! I’m new in Web Development and I'm looking forward.</div>
        <div className="flex gap-x-3">
          <ContentBtn btnName="My Projects" routeName="works"></ContentBtn>
          <ContentBtn btnName="About Me" routeName="aboutme"></ContentBtn>
        </div>
    </div>
  )
}

export default Welcome
