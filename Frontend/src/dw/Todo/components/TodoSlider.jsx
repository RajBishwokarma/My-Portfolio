import React from 'react'

import { todoSL } from '../logics/TodoSliderLogic'
import { BtnModel } from '../../../components/btn/BtnModel'
import { svg } from '../../../assets/svgs'
import { Link } from 'react-router-dom'

export const TodoSlider = ({ setUIColor, setDelAllPopup, setNameEditPopup, isLogIn, setIsLogIn, userName }) => {
  
  const UIColorLogic = (event) => { // UI Color Updater
    setUIColor(event.target.value)
  }
  
  return (
    <div id='js-TodoSlider' 
        className='fixed z-50 left-full bg-[#000000b0] backdrop-blur-lg text-white h-full p-5 flex flex-col gap-y-5 *
            duration-500 transition-all'
        style={{minWidth: '200px', width: '30%'}}>
        {/* Greet User */}
        <div className="text-xl bg-amber-2001 flex items-center flex-wrap break-words" id='slidermain'>
          Welcome,
          <span className='pl-2'>
            {userName}
          </span>
          <span id="nameEditBtn" className='w-7 h-7 pl-1 flex items-center'>
            <BtnModel imgsrc={svg.editSquare} logic={()=>setNameEditPopup(true)}/>
          </span>
        </div>
        {/* Change Ui Color */}
        <div className="flex items-center gap-x-2">
          <span className="">UI Color:</span> 
          <input type="color" className="outline-none" id="uiColor" onChange={UIColorLogic} />
        </div>
        <div className='absolute top-1/2 right-5 h-10 w-10 rotate-180.'>
          <BtnModel imgsrc={svg.LeftArrowBlack} logic={todoSL}/>
        </div>
        {/* Delete All Task */}
        <div className="text-red-500 text-lg font-bold cursor-pointer hover:text-black active:text-white" onClick={()=>{setDelAllPopup(true)}}>Delete All Task !!!</div>
        {/* <LogOption /> */}
        <div className="flex-grow flex items-end"> 
          {isLogIn ? <LogOutOption setIsLogIn={setIsLogIn} /> : <LROption />}
        </div>
    </div>
  )
}

// component
function LROption() {
  return (<div>
    <span className="text-red-500 text-lg font-bold">Note:-</span>
    <span className='cursor-default' id='testaccount'>Please <a  href='/login' className='underline hover:text-violet-500 active:text-red-500 '>login</a> to save your data.</span>
    <div className='cursor-default' id='testaccount'>New ? Consider <a  href='/register' className='underline hover:text-violet-500 active:text-red-500 '> Signing Up! </a></div>
    <div className='cursor-default'><a  href='/welcome' className='underline hover:text-violet-500 active:text-red-500 '>My Portfolio</a></div>
  </div>)
}
function LogOutOption({setIsLogIn}) {
  return (<div className=''>
    <div className='cursor-default' id='testaccount' onClick={()=>{setIsLogIn(false)}}><a  href='/todo' className='underline hover:text-violet-500 active:text-red-500 '> Logout !!! </a></div>
    <div className='cursor-default'><Link  to='/welcome' className='underline hover:text-violet-500 active:text-red-500 '>My Portfolio</Link></div>
  </div>)
}

