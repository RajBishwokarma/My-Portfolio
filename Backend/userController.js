import bcrypt from "bcrypt"
import db from "./firebase.js"
import { FieldValue } from "firebase-admin/firestore"

// summon all users 
export const getAllUsers = async (req, res) => {
    const { collection } = req.query
    if (!collection) {
        return res.status(400).json({msg: "Collection is Invalid!"})
    }
    try {
        const getData = await db.collection(collection).get()
        if (getData.empty) {
            return res.status(404).json({msg: "Its quite in here!"})
        }
        const store = []
        getData.forEach( user=> {
          const userData = user.data()
          store.push(userData)
        })
        res.status(200).json({msg: "Here's the list, Sir!",store})
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// Sign Up
export const newUser = async (req, res) => {
    const { rUsername, rPassword, rEmail } = req.body.reqData
    if (!rUsername || !rPassword || !rEmail) {
        return res.status(400).json({msg: "Username, Password and Email are Required!"})
    }
    try {
        const normalizedEmail = rEmail.toLowerCase();
        // const checkEmail = await users.findOne({email: normalizedEmail})
        const docRef = db.collection('users').doc(rEmail)
        const checkEmail = await docRef.get()
        if (checkEmail.exists) {
            return res.status(409).json({msg: "This email already has been used. Try new one.", email: normalizedEmail})
        }
        const passwordHash = await bcrypt.hash(rPassword,10)
        const rData = {
            username: rUsername,
            password: passwordHash,
            email: normalizedEmail,
            _TodoApp: [],
            online: false
        }

        // await users.create(rData); // Create a new user
        await db.collection('users').doc(rEmail).set(rData) // Create a new user
        return res.status(201).json({msg: 'User has been registered successfully.', rData}) 
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// Sign In
export const getUser = async (req, res) => {
    const { lEmail, lPassword } = req.body.reqData
    if ( !lEmail || !lPassword ) {
        return res.status(400).json({msg: "Email and Password are Required!"})
    }
    try {
        // const getUser = await users.findOne({email: lEmail})
        // const getUser = await users.findOne({email: lEmail})
        const docRef = db.collection('users').doc(lEmail)
        const getUser = await docRef.get()
        if (!getUser.exists) {
            return res.status(404).json({msg:"Account not found!"})
        }
        const userData = getUser.data() || 'no data'
        const pHash = userData.password
        const passwordIs = await bcrypt.compare(lPassword, pHash)
        if (!passwordIs) {
            return res.status(401).json({msg:"Wrong password"})
        }
        await docRef.update({ online: true })
        return res.json({ msg:`Welcome! ${userData.username}`, passwordIs, username: userData.username, email: userData.email, })
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// Rename
export const changeName = async(req,res)=>{
    const { userEmail, newName } = req.body.reqData
    if ( !userEmail || !newName ) {
        return res.status(400).json({msg: "New name and Email are Required!"})
    }
    try {
        const docRef = db.collection('users').doc(userEmail)
        const checkEmail = await docRef.get()
        if (!checkEmail.exists) {
            return res.status(404).json({msg:"Account not found!"})
        }
        await docRef.update({ username: newName})
        res.status(200).json({ msg: `Username Changed to: ${newName}.`, nameChanged: true }) 
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}

// todo 
// a task
export const getUserTask = async (req,res)=>{
    const { userEmail, taskIndex } = req.body.reqData
    if ( !userEmail || !taskIndex ) {
        return res.status(400).json({msg: "Email and Index are Required!"})
    }
    try {
        const docRef = db.collection('users').doc(userEmail)
        const getTodoData = await docRef.get()
        if (!getTodoData.exists) {
            return res.status(404).json({msg:"Account not found!"})
        }
        const _TodoTask = getTodoData.data()._TodoApp[taskIndex] || ["Task is undefined."]
        res.status(200).json({msg: 'Task has been retrived', _TodoTask})
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// gather all task
export const getUserAllTask = async (req,res)=>{
    const { userEmail } = req.body.reqData
    if ( !userEmail ) {
        return res.status(400).json({msg: "Email is Required!"})
    }
    try {
        const docRef = db.collection('users').doc(userEmail)
        const getTodoData = await docRef.get()
        if (!getTodoData.exists) {
            return res.status(404).json({msg:"Account not found!"})
        }
        const _TodoApp = getTodoData.data()._TodoApp || []
        res.status(200).json({msg: 'Tasks has been retrived', _TodoApp})
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// new Task
export const createNewTask = async (req,res)=>{
    const { userEmail, taskText, taskDate } = req.body.reqData
    if ( !userEmail || !taskText || !taskDate ) {
        return res.status(400).json({msg: "Email, Task text and Task date are Required!"})
    }
    try {
        const docRef = db.collection('users').doc(userEmail)
        const userData = await docRef.get()
        if (!userData.exists) {
            return res.status(404).json({msg:"Account not found!"})
        }
        const todoData = userData.data()._TodoApp
        if (todoData.length >= 20) {
            return res.status(409).json({msg:"Can't add more task, max limit exceeded!"})
        } 
        const newData = {
            taskText,
            isComplete: false,
            taskDate: taskDate
        }
        await docRef.update({
            _TodoApp: FieldValue.arrayUnion(newData)
        })
        res.status(201).json({msg: 'Task Created'})
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"})
    }
}
// is complete?
export const updateTaskState =  async (req, res) => {
    const { userEmail, taskDate, isComplete } = req.body.reqData;
    if (!userEmail || !taskDate) { // Validate input
        return res.status(400).json({ msg: "Email, Task date and Task state are Required!" });
    }
    if (isComplete === undefined) { // Validate input
        return res.status(404).json({ msg: "Task not found!" });
    }
    try {
        const docRef = db.collection('users').doc(userEmail);
        const getTodoData = await docRef.get();
        if (!getTodoData.exists) {// Checking Account
            return res.status(404).json({ msg: "Account not found!" });
        }
        const _TodoTask = getTodoData.data()._TodoApp || []
        if (_TodoTask.length < 0) {
            return res.status(404).json({ msg: "No Task found to Update!" });
        }
        const _newTodoApp = _TodoTask.map( (e,i) => {
            const data = {
                taskText: e.taskText,
                isComplete: e.isComplete,
                taskDate: e.taskDate,
            }
            if (taskDate === e.taskDate) {
                data.isComplete = !isComplete
            }
            return data
        })
        await docRef.update({ // Update task
            _TodoApp: _newTodoApp
        })
        res.status(200).json({ msg: 'Task has been updated', _TodoTask });
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong!" });
    }
}
// Delete task
export const delUserTask = async (req,res)=>{
    const { userEmail, taskDate } = req.body.reqData;
    if (!userEmail || !taskDate) { // Validate input
        return res.status(400).json({ msg: "Email and a valid Index are Required!" });
    }
    try {
        const docRef = db.collection('users').doc(userEmail);
        const userData = await docRef.get();
        if (!userData.exists) {// Checking Account
            return res.status(404).json({ msg: "Account not found!" });
        }
        const _TodoTask = userData.data()._TodoApp || []
        if (_TodoTask.length < 0) {
            return res.status(404).json({ msg: "No Task found to Update!" });
        }
        const _newTodoApp = _TodoTask.filter( (e,i) => e.taskDate !== taskDate)
        await docRef.update({ // Delete task
            _TodoApp: _newTodoApp
        })
        res.status(200).json({ msg: 'Task has been Deleted' });
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong!" });
    }
}
// Almighty Delete!!!
export const delUserAllTask = async (req,res)=>{
    const { userEmail } = req.body.reqData
    if (!userEmail ) { // Validate input
        return res.status(400).json({ msg: "Email is Required!" });
    }
    try {
        const docRef = db.collection('users').doc(userEmail);
        const userData = await docRef.get();
        if (!userData.exists) {// Checking Account
            return res.status(404).json({ msg: "Account not found!" });
        }
        await docRef.update({// Almighty Delete!!!
            _TodoApp: []
        })
        res.status(200).json({ msg: 'This World shall Know Pain, Almighty Delete!!!' });
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong!" });
    }
}