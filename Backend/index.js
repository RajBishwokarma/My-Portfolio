import express from 'express'
import cors from 'cors'
import dotenv, { config } from 'dotenv'
dotenv.config() // Load environment variable

import { todoRoute, userRoutes } from './routes.js'
import db from './firebase.js';

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

app.get('*', (req, res) => { // its just testing
  return res.status(404).send('404 page not found')
})

// Server Start
app.listen(PORT, () => console.log(`We are running at port ${PORT}...`))