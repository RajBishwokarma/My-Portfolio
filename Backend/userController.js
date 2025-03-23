
import { todoUsersData, users } from "./models/rUser.js";
import bcrypt from "bcrypt"

function getFullUrl(req) {
    console.log(`${new Date} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
}

// user 
export const getAllUsers = async (req, res) => {
    try {
        getFullUrl(req);
        
        const getUser = await users.find(); // Use await to get the result
        if (getUser) {
            res.json(getUser); // Send the user data if found
        } else {
            res.status(404).json({msg:'User not found'}); // Handle case where user is not found
        }
    } catch (error) {
        res.status(500).json({msg:'Server Error'})
    }
}
// Sign Up
export const newUser = async (req, res) => {
    try {
        getFullUrl(req);
        
        const { rUsername, rPassword, rEmail } = req.body
        if (rUsername && rPassword && rEmail) {
            const normalizedUsername = rUsername.toLowerCase().replace(/\s/g, '')
            const normalizedEmail = rEmail.toLowerCase();
            const checkEmail = await users.findOne({email: normalizedEmail})
            if (checkEmail) {
                console.log('This email has already been used.')
                return res.status(409).json({msg: "This email already has been used. Try new one.", email: normalizedEmail})
            }
            const passwordHash = await bcrypt.hash(rPassword,10)
            const rData = {
                username: normalizedUsername,
                password: passwordHash,
                email: normalizedEmail
            }
            await users.create(rData); // Create a new user
            console.log('New user has been created.')
            return res.status(201).json({msg: 'User has been registered successfully.'}) 
        }
        return res.status(400).json({msg:'bad request... try again'})
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error.'})
    }
}
// Sign In
export const getUser = async (req, res) => {
    try {
        getFullUrl(req); // logs Url when someone visits!

        const { lEmail, lPassword } = req.body
        const getUser = await users.findOne({email: lEmail})
        if (!getUser) {
            console.log("Didn't find any user with This Email...");
            
            return res.status(404).json({msg:"Didn't find any user with This Email..."})
        }
        const pHash = getUser.password
        const passwordIs = await bcrypt.compare(lPassword, pHash)
        if (passwordIs) {
            console.log(`${getUser.username} Login successfully.`)
            return res.json({ passwordIs, username: getUser.username, email: getUser.email, msg:'Login successfully.' })
        } else {
            console.log(`${getUser.username} is trying to Login with incorrect password.`)
            return res.status(401).json({msg:"Wrong password"})
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'})
    }
}
// Rename
export const changeName = async(req,res)=>{
    try {
        getFullUrl(req);
        
        const { email, newUsername } = req.body

        const updateUN = await users.findOneAndUpdate({email},{$set:{username: newUsername}},{new: true})
        if (!updateUN) {
            res.status(200).json({ msg: `Didn't find anyone with this email: `, nameChanged: false, updateUN })
            return;
        }
        res.status(200).json({ msg: `Username Updated to: ${newUsername}.`, nameChanged: true }) 
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'})
    }
}

// todo user Data

export const getUserTask = async (req,res)=>{
    try {
        getFullUrl(req);
        
        const getData = await todoUsersData.find(req.body)
        // console.log(getData)
        res.status(200).json({msg: 'Task', getData})
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'}); // Handle server errors
    }
}
export const getUserAllTask = async (req,res)=>{
    try {
        getFullUrl(req);
        
        console.log(req.query);
            console.log(req.query, 'true');
        const getData = await todoUsersData.find(req.query)
        if (!getData.length) {
            
            res.status(200).json({msg: `There are no Task`})
            // res.status(200).json({msg: `Didn't find anyone with this Email`})
        } else {
            res.status(200).json({msg: 'All Task are here: ', getData})
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'}); // Handle server errors
    }
}
export const createNewTask = async (req,res)=>{
    try {
        getFullUrl(req);
        
        const { email, taskName, taskDate } = req.body
        const newData = {
            email,
            taskName,
            isComplete: false,
            taskDate: taskDate
        }
        const uploadData = await todoUsersData.create(newData)
        res.status(201).json({msg: 'Task Created',uploadData})
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'}); // Handle server errors
    }
}
export const updateTaskState =  async (req, res) => {
    try {
        getFullUrl(req);
        
        console.log('its uts')
        const { email, taskDate, isComplete } = req.body
        console.log(email, taskDate, isComplete);
        
        const updateData = await todoUsersData.updateOne(
            { email: email, taskDate: taskDate },
            { $set: { isComplete: !isComplete } },
            { new: true }
        )
        console.log(updateData);

        res.status(200).json({ msg: 'Task Updated', updateData })
    } catch (error) {
        console.error(error)  // Use `error` instead of `err`
        res.status(500).json({ msg: 'Server Error', error: error.message })  // Use `error.message` instead of `err.message`
    }
}
export const delUserTask = async (req,res)=>{
    try {
        getFullUrl(req);
        
        console.log(req.body);
        const { email, taskDate } = req.body
        
        const delTask = await todoUsersData.deleteOne({email, taskDate})
        
        res.status(201).json({msg: `Task: ${req.body.taskDate} has been deleted`, delTask})
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'}); // Handle server errors
    }
}
export const delUserAllTask = async (req,res)=>{
    try {
        getFullUrl(req);
        
        const updateData = await todoUsersData.deleteMany(req.body)
        if (updateData) {
            console.log('All task has been Deleted ');
        }
        res.status(201).json({msg: 'All task has been Deleted', updateData})
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({msg:'Server Error'}); // Handle server errors
    }
}