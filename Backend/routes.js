
import { Router } from "express"
import { changeName, createNewTask, delUserAllTask, delUserTask, getAllUsers, getUser, getUserAllTask, getUserTask, newUser, updateTaskState } from "./userController.js"
import { todoUsersData, users } from "./models/rUser.js"

// const userRoutes = Router()
export const userRoutes = Router()
export const todoRoute = Router()

userRoutes.get('/test', ()=>console.log('good')) // just Debugging
// Users
userRoutes.get('/show', getAllUsers)   // Show All Account
userRoutes.post('/register', newUser)  // Create New Account
userRoutes.post('/login', getUser)     // Login 
userRoutes.patch('/changename', changeName) // Change Username 

// Todo
todoRoute.post('/getTask', getUserTask)// Get One Task for debugging
todoRoute.get('/getAllTask', getUserAllTask)// Get all Tasks 
todoRoute.post('/newtask', createNewTask)// Create New Task
todoRoute.patch('/uts', updateTaskState)// Update Task Status
todoRoute.post('/deltask', delUserTask)// Delete one Task
todoRoute.post('/delalltask', delUserAllTask)// Delete All Task

// 
// Chat

