import React from 'react'

export const BtnModel = (props) => {
    const { imgsrc,} = props
    return (
      <button className='bg-transparent w-fit h-fit'>
          <img
            src={`${imgsrc}`}
            alt=""
            // className="w-full h-full p-1 rounded-full transition-colors duration-100 hover:bg-bws-90 active:bg-bws-80 "
            className="p-1px1 rounded-full tdc hover:shadow-md active:shadow-sm "
          />
      </button>
    )
}
  