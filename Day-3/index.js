const express=require('express')

const app=express()

app.use(express.json())
let users=[]

app.get('/',(req, res)=>{
   res.send(users)
})

app.post('/create',(req,res)=>{
    let body=req.body
    users.push(body)
   res.send("User created successfully");
})


app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    let updatedusers=users.filter((val)=>val.id!==id)
   users= updatedusers

   res.send("deleted")
})

app.listen(8000, ()=>{
    console.log("app is listening to port 8000")
})