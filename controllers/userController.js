 const { json } = require('express')
const User = require('../modules/userModule.js')


exports.home = (req, res) => {
    res.send("hellow from user controller")

}


exports.createUser = async (req, res) =>{

    
    try{
const {name, email} =  req.body


if(!name || !email){
    throw new Error("Name and Email required")
}

const userExits = await User.findOne({email})

if(userExits){
    throw new Error("User already exits")
}


const user = await User.create({
    name, 
    email
}) 
res.status(201).json({
    success: true,
    message: "user creater successfully",
    user
})

    }
    catch(err){
        console.log(err)
         res.status(400).json({
            success:false,
            message: err.message
         }) 
    }
}

exports.getUser = async (req,res)=>{

    
    try {
      const users = await User.find({})

      if(!users){
        throw new Error("No user availble in the server")
      }
      res.status(200).json({
        success: true,
        message: "list of users",
        users
      })
        
    } catch (error) {
       console.log(error.message)
       res.status(400).json({
        success: false,
        message: error.message
       })
    }
}

exports.deteleUser = async (req, res) =>{
    try {
        const userId =  req.params.id              
        const deleteUser = await User.findByIdAndDelete(userId)

        res.status(200).json({
            success: true,
            message: "user deleted successfully ",
            deleteUser
        })


    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message: "failed to delete user"
        })
    }
}
exports.updateUser = async (req,res) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message: "user Updated successfully",
            updateUser
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message:" failed to update user"
        })
    }

}