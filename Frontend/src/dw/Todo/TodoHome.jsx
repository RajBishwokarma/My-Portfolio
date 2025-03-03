import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { AddTaskBar } from './components/AddTaskBar'
import { ShowTasks } from './components/ShowTasks'


export const TodoHome = (props) => {
  
  const { isLogIn, userEmail } = props
  const { uiColor, todoData, setTodoData  } = useOutletContext()

  return (
      <div
          className='h-full p-5 flex flex-col items-center gap-5'
          id='todoCon'
          style={{ backgroundColor: uiColor }} // dynamic background color
      >
        <AddTaskBar isLogIn={isLogIn} userEmail={userEmail} todoData={todoData} setTodoData={setTodoData} />
        <ShowTasks isLogIn={isLogIn} userEmail={userEmail} todoData={todoData} setTodoData={setTodoData} />
      </div>
  );
};