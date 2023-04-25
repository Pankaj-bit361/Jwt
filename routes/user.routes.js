
const express=require("express")
const { UserModel } = require("../models/user.model")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    try {
        const user=new UserModel(req.body)
await user.save()
res.status(200).send({"msg":"new user has been registered"})
    } catch (error) {
      res.status(400).send({err:error.messege})
    }

})

userRouter.post("/login",async(req,res)=>{
const {email,password}=req.body

try {

 const user =  await UserModel.findOne({email:email,password:password})

 if(user){
    res.status(200).send({"msg":"login succesfull"})
 }else{
    res.status(200).send({"msg":"wrong Credentials"})
 }


} catch (error) {
    res.status(400).send({err:error.messege})
}

})


module.exports={
    userRouter
}