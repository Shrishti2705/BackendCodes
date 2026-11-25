
import connectDB from './src/config/db.js'
import app from './src/app.js'


await connectDB()
app.listen(8000, ()=>{
    console.log("app is running")
})