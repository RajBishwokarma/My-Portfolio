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
    <div className='bg-white text-3xl w-3/5 p-1 flex rounded-full inset-shadow-2xs shadow-2xl'>
      <input type="text" id='addTaskIn' className="bg-transparent w-full pl-6 pr-2 outline-none" placeholder='Type Your Task Here,'
              value={taskInData}  onChange={handleInputChange} onKeyDown={handleEnterKey}/>
      <div className="w-16 h-fit flex items-center justify-center">
        <BtnModel imgsrc={svg.rightArrow} logic={handleAddBtn}></BtnModel>
      </div>
    </div>
  )
}
