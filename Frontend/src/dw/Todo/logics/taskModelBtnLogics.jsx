import { todoData } from "../../../assets/todoData"


function isCompleteLogic(taskIndex, todoData1) {
    
    return todoData[taskIndex].isComplete?todoData[taskIndex].isComplete=false:todoData[taskIndex].isComplete=true
    
}

const addTaskLogic = () => {
    
}

export { isCompleteLogic }


// const  = () => {
    
// }
