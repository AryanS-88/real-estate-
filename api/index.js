import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('connected to DB')
//   })
//   .catch((err) => {
//     console.log(err)
//   })
const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to DB')
  } catch (err) {
    console.log(err)
  }
}

ConnectToDB()

const app = express()
app.listen(3000, () => {
  console.log('server is on port 3000')
})

app.use('/api/user/', userRouter)
