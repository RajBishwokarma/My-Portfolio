import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config() // Load environment variable

import { todoRoute, userRoutes } from './routes.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for form data
app.use(cors())
app.options('*', cors()) // Handle preflight requests

// Routes
app.get('/', (req, res) => { // its just testing
  res.send('This is our Brand New Server...')
})
app.use('/api/user/', userRoutes)
app.use('/api/todo/user/', todoRoute)

// DB Connection and Server Start
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.DB_Web)
      .then(() => console.log('web db is connected..'))
      
    console.log(`We are running at port ${PORT}...`)
  } catch (error) {
    console.log(error)
  }
})