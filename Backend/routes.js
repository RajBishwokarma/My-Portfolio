
import { Router } from "express"
import { getAllUsers, newUser, getUser, changeName, getUserTask, getUserAllTask, createNewTask, updateTaskState, delUserTask, delUserAllTask } from "./userController.js"

// const userRoutes = Router()
export const userRoutes = Router()
export const todoRoute = Router()

// // Users
userRoutes.get('/show', getAllUsers)   // Show All Account
userRoutes.post('/register', newUser)  // Create New Account
userRoutes.post('/login', getUser)     // Login 
userRoutes.patch('/changename', changeName) // Change Username 

// // Todo
todoRoute.post('/getTask', getUserTask)// Get One Task for debugging
todoRoute.post('/getAllTask', getUserAllTask)// Get all Tasks 
todoRoute.post('/newtask', createNewTask)// Create New Task
todoRoute.patch('/uts', updateTaskState)// Update Task Status
todoRoute.post('/deltask', delUserTask)// Delete Task
todoRoute.post('/delalltask', delUserAllTask)// Delete All Task
