const Admin=require("../models/admin.model");
const jwt = require('jsonwebtoken');
require("dotenv").config()

const genrateToken=(admin)=>{
    console.log(process.env)
    
    return jwt.sign({admin}, process.env.JWT_SECRET_KEY);
}


const adminregister= async (req,res)=>{
    try {
        let admin=await Admin.findOne({email:req.body.email})
        if(admin){
            return res.status(400).send({message:"email alerady exsits"})
        }
        admin =await Admin.create(req.body);
        const token=genrateToken(admin);
        return  res.status(200).send({admin,token});
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}

const adminlogin=async (req,res)=>{
    try {
        const admin=await Admin.findOne({email:req.body.email})
        if(!admin){
       return res.status(400).send("worng email or password")
    }

    const match=admin.checkPassword(req.body.password)
    if(!match){
        return res.status(400).send({message:"worng email or password"})  
    }
    const token=genrateToken(admin);
    return  res.status(200).send({admin,token});
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}
module.exports={adminregister,adminlogin}