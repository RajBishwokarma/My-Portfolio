import axios from "axios";


export const addTaskLogic = async ( isLogIn, userEmail, setTodoData, taskInData, setTaskInData, addTaskState, setAddTaskState ) => {
    if (!taskInData) return;
    if (!addTaskState) return;
    setAddTaskState(false)
    const taskText = taskInData
    setTaskInData('')
    const taskDate = Date.now()
    if (isLogIn) {
        try {
            const pData = { userEmail, taskText, taskDate } // Preparing Data       
            await axios.post("https://my-portfolio-b9tc.onrender.com/api/todo/user/newtask", { _Route: "Add task", reqData: pData })
        } catch (error) {
            setAddTaskState(true)
            return alert("error while adding task: "+ error.response.data.msg)
        }
    }
    const aData = { taskText, isComplete: false, taskDate } // adding Data
    setTodoData( p => [...p, aData])
    setAddTaskState(true)
    return;
}

export const logicIsComplete = async (taskIndex, isComplete, taskDate, setTodoData, isLogIn, userEmail) => {
    setTodoData((pre)=>{
        const newData = [...pre]
        newData[taskIndex] = {
            ...newData[taskIndex],
            isComplete:!newData[taskIndex].isComplete
        } 
        return newData
    })
    if (!isLogIn) return;
    const pData = { userEmail, taskDate, isComplete } // Preparing Data
    try {   
        await axios.patch("https://my-portfolio-b9tc.onrender.com/api/todo/user/uts", { _Route: "Update task stats", reqData: pData })
    } catch (error) {
        return alert("error while updating task: "+ error.response.data.msg)
    }
    return;
}

export const logicDelTask = async (taskIndex, taskDate, setTodoData, todoData, isLogIn, userEmail) => {
    
    const newData = todoData.filter( (e,i) => i !== taskIndex )
    setTodoData(newData)
    if (!isLogIn) return;
    const pData = { userEmail, taskDate } // Preparing Data
    try {    
        await axios.post("https://my-portfolio-b9tc.onrender.com/api/todo/user/deltask", { _Route: "Delete task", reqData: pData })
    } catch (error) {
        return alert("error while deleting task: "+ error.response.data.msg)
    }
}

export const logicDelAllTask = async ( setIsPopup, todoData, setTodoData, isLogIn, userEmail ) => {
    setIsPopup(false)
    if (todoData.length === 0) {
        alert('There are No any Task to Delete...');
        return
    }
    setTodoData([]) 
    if (!isLogIn) return
    try { 
        await axios.post('https://my-portfolio-b9tc.onrender.com/api/todo/user/delalltask', { _Route: "Almighty Delete!!!", reqData:{userEmail} })
            .then( res => alert(res.data.msg))
    } catch (error) {
        alert('Almighty Delete, Failed!!!:'+ error.response.data.msg)
    }
}
