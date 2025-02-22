import React from 'react'
import ContentBtn from '../btn/ContentBtn'

const AboutMe = () => {
  return (
    <div>
      <div className='text-4xl my-5 text-center'>About Me</div>
      <hr className="h-px my-2 bg-gray-200 border-0"></hr>
      <div className='text-2xl my-5 '>I'm Raj Bishwakarma and I'm just starting out in Web Development. I’m passionate about about this career and have been learning through Tutorials, Self-Study, etc.</div>
      <div className='text-2xl my-5 '>Here are some of the skills I’ve been developing:  
        <ol className='list-disc ml-10'>
          <li>Basic understanding of M.E.R.N stack</li>
          <li>Familiarity with React hooks, Npm packages, Tailwindcss, etc.</li>
        </ol>
      </div>
      <div className='text-2xl my-5 '>Throughout my learning process, I’ve enjoyed myself and learned many cool stuffs. I’m excited to apply what I’ve learned in real-world projects and continue growing in this field.</div>
      
      <div className="flex gap-x-3">
        <a href="/RajBishwokramaCV.pdf" download title='download my cv'>
            <button className="bg-[#000000cc] text-white py-2 px-4 rounded-md hover:bg-[#000000ee] active:text-violet-400">My CV</button>
        </a>
        <ContentBtn btnName="My Projects" routeName="works"/>
      </div>
    </div>
  )
}

export default AboutMe