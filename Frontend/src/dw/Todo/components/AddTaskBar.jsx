import React, { useState } from 'react'
import { BtnModel } from '../../../components/btn/BtnModel'
import { svg } from '../../../assets/svgs'
import { addTaskLogic } from '../logics/taskBtnLogics'


export const AddTaskBar = (props) => {
  const { isLogIn, userEmail, setTodoData } = props
  
  const [taskInData, setTaskInData] = useState('')
  
  const handleInputChange = e => setTaskInData( e.target.value )
  const handleAddBtn = () => addTaskLogic( isLogIn, userEmail, taskInData, setTaskInData, setTodoData )
  const handleEnterKey = e => (e.key === 'Enter') && handleAddBtn()
  

  return (
    <div className='bg-white text-3xl w-3/5 p-1 pl-5 flex items-center rounded-full inset-shadow-2xs shadow-2xl  
          max-[400px]:p-0 max-[400px]:pl-3 max-[400px]:text-lg  max-[400px]:w-[80%]'>
      <input type="text" id='addTaskIn' className="bg-transparent w-full pl-1 pr-2 outline-none  max-[350px]:pl-4" placeholder='Type Your Task Here,'
              value={taskInData}  onChange={handleInputChange} onKeyDown={handleEnterKey}/>
      <div className="w-16 h-fit flex items-center justify-center  max-[400px]:w-10">
        <BtnModel imgsrc={svg.rightArrow} logic={handleAddBtn}></BtnModel>
      </div>
    </div>
  )
}
