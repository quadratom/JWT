require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

//  const connectDB = require('./db/connect')

 const Router = require('./routes/route')

const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json())




app.use('/api/v1', Router)

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)




 const port = process.env.PORT || 3021

const start = async ()=> {
    try {
        // connectDB
        // await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
