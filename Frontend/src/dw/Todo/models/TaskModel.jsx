import React from 'react'
import '../../../index.css'
import { BtnModel } from '../../../components/btn/BtnModel'
import { svg } from '../../../assets/svgs'
import { logicDelTask, logicIsComplete } from '../logics/taskBtnLogics'

export const TaskModel = (props) => {

  const { taskIndex, task, todoData, setTodoData, isLogIn, userEmail } = props

  const { taskName, isComplete, taskDate } = task

  const completeTaskttl = isComplete?<del>{taskName}</del>:taskName
  const imgsrcIsComplete = isComplete?svg.tickSquare:svg.boxSquare

  const handleIsCompleteBtn = () => logicIsComplete( taskIndex, isComplete, taskDate, setTodoData, isLogIn, userEmail)
  const handleDelBtn = () => logicDelTask(taskIndex, taskDate, setTodoData, todoData, isLogIn, userEmail)

  return (
    // <div className=' text-2xl w-full h-fit rounded-4xl py-2 pl-5 pr-3 mb-1 shadow-md flex items-center'>
    <div className={` text-2xl w-full h-fit rounded-4xl py-2 pl-5 pr-3 mb-1 shadow-md flex items-center`}
        style={{animation: "createAni 0.6s ease-in-out"}}>

      <div className="flex-1 overflow-hidden">
        <div className="text-justify break-words">{completeTaskttl}</div>
      </div>

      <span className="w-[1px] h-8 ml-2 mr-[2px] bg-gradient-to-t from-white via-[#00000050] to-white"></span>
      <div className=" w-16 h- pl-1 py- flex items-center gap-x-1">
          <BtnModel imgsrc={imgsrcIsComplete} logic={handleIsCompleteBtn}></BtnModel>
          <BtnModel imgsrc={svg.delete} logic={handleDelBtn} ></BtnModel>
      </div>
    </div>
  )
}
