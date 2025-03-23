import React from 'react'
import ContentBtn from '../btn/ContentBtn'

const AboutMe = () => {
  return (
    <div className='text-2xl max-[350px]:text-xl'>
      <div className='text-4xl my-5 text-center max-[350px]:text-2xl max-[350px]:my-3'>About Me</div>
      <hr className="h-px my-2 bg-gray-200 border-0"></hr>
      <div className=' my-5 '>My name is Raj Bishwokarma and I am a newcomer in the field of Web Development. It is a career I am deeply interested in and have been actively working on learning via Tutorials, Self Study and so on.</div>
      <div className=' my-5 '>The skills I have developed are:  
        <ol className='list-disc ml-10'>
          <li>Beginner level knowledge of M.E.R.N stack</li>
          <li>Working knowledge of React hooks, Npm packages, Tailwindcss, etc.</li>
        </ol>
      </div>
      <div className=' my-5 '>I must say that the learning experience so far has been fun and I have learned a lot of cool things. I am really looking forward to implementing my skills through real life projects and growing further in the field.</div>
      
      <div className="text-lg flex gap-x-3 max-[300px]:flex-col max-[350px]:text-sm">
        <a href="RajBishwokramaCV.pdf" download title='download my cv'>
            <button className="bg-[#000000cc] text-white py-2 px-4 rounded-md hover:bg-[#000000ee] active:text-violet-400">My CV</button>
        </a>
        <ContentBtn btnName="My Projects" routeName="works"/>
      </div>
    </div>
  )
}

export default AboutMe
