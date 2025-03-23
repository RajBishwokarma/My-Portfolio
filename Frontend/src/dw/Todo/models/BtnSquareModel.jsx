import React from 'react'

export const BtnModel = (props) => {
    const { imgsrc,} = props
    return (
      <button className='bg-transparent w-fit h-fit'>
          <img
            src={`${imgsrc}`}
            alt=""
            className="p-1px1 rounded-full tdc hover:shadow-md active:shadow-sm "
          />
      </button>
    )
}
  