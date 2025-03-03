import React from 'react'

export const BtnModel = (props) => {

  const { imgsrc, logic } = props
  const { url, shape } = imgsrc

  const imgClassName = shape==='Circle'?"p-1 rounded-full"
                      :shape==='Square'?"p-1px rounded-lg"
                      :""
  const logicHandler = () => {
    logic?logic():console.log('button logic: ' + logic)
  }
  return (
    <button className="bg-transparent w-fit h-fit outline-none">
      <img 
          src={url} 
          className={`td300 hover:shadow-lg active:shadow-sm ${imgClassName}`} 
          onClick={logicHandler}/>
    </button>
)}
