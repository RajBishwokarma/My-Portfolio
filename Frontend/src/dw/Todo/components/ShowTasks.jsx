import React from 'react'
import { TaskModel } from '../models/TaskModel'
// import { todoData } from '../../../assets/todoData'


export const ShowTasks = (props) => {

  const { isLogIn, userEmail, todoData, setTodoData } = props

  return (
    <div className='relative bg-white bg-blue-5001 w-10/12 h-full p-1 rounded-xl shadow-inner-md  flex items-center justify-center'>
      <div className='relative h-full  w-full z-10'>
        {/* task List */}
        <div className='absolute w-full h-full overflow-y-auto scr p-4 z-0'>
          {todoData.length?
            todoData.map((e,i) => {
              return <TaskModel key={i} taskIndex={i} task={e} todoData={todoData} setTodoData={setTodoData} isLogIn={isLogIn} userEmail={userEmail} ></TaskModel>
            }):
            <NoTaskBanner/>
          }
        </div>
      </div>
    </div>
  )
}

// Components 
function NoTaskBanner() {
  return(
    <div className="h-full p-10 flex justify-center items-center">
      <span className="text-5xl font-mono font-bold text-center py-7 px-10 rounded-2xl shadow-2xl" >There are no any Task...</span>
    </div>
  )
}
