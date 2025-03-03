import React from 'react'
import { Link } from 'react-router-dom'

const ContentBtn = (props) => {
    const { btnName, routeName } = props
  return (
    <Link to={`/${routeName}`} className="">        
        <button className="relative group p-1 text-lg font-semibold text-gray-600 hover:text-black transition-colors duration-200">
          {btnName}
          <span className="absolute left-0 right-0 bottom-1 h-0.5 bg-black scale-x-0 transition-transform duration-300 
            group-hover:scale-x-100 group-active:bg-violet-500 "/>
        </button>      
      </Link>
  )
}

export default ContentBtn
