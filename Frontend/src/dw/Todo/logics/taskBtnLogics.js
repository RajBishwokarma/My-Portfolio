import axios from "axios";


export const addTaskLogic = async ( isLogIn, userEmail, taskInData, setTaskInData, setTodoData ) => {
    if (!taskInData) return;
    const taskName = taskInData
    setTaskInData('')
    
    const dateNow = Date.now()
    if (isLogIn) {
        await axios.post('http://localhost:3000/api/todo/user/newtask', { email: userEmail, taskName: taskName, taskDate: dateNow })
    }
    setTodoData( p => [...p, { taskName: taskName, isComplete: false, taskDate: dateNow }])
    return;
}

export const logicIsComplete = async (taskIndex, isComplete, taskDate, setTodoData, isLogIn, userEmail) => {
    
    if (isLogIn) {
        await axios.patch('http://localhost:3000/api/todo/user/uts', { email: userEmail, taskDate, isComplete })
    }
    setTodoData((pre)=>{
        const newData = [...pre]
        newData[taskIndex] = {
            ...newData[taskIndex],
            isComplete:!newData[taskIndex].isComplete
        } 
        return newData
    })
}

export const logicDelTask = async (taskIndex, taskDate, setTodoData, todoData, isLogIn, userEmail) => {
    
    if (isLogIn) {    
        await axios.post('http://localhost:3000/api/todo/user/deltask', { email: userEmail, taskDate, _method: 'delete' })
    }
    const newData = todoData.filter( (e,i) => i !== taskIndex )
    setTodoData(newData)
    return;
}

export const logicDelAllTask = async ( setIsPopup, todoData, setTodoData, isLogIn, userEmail ) => {
    setIsPopup(false)
    if (todoData.length === 0) {
        alert('There are No any Task to Delete...');
        return
    }
    setTodoData([]) 
    if (isLogIn) {
        try { 
            await axios.post('http://localhost:3000/api/todo/user/delalltask', { email: userEmail })
        } catch (error) {
            console.error('Error deleting tasks:', error);
        }
    }
}
