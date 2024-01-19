const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
           type:String,
           required: true,
           maxLength: [20, "Name character must be less than 20 char"],
           trim: true

        },
        email:{
            type : String,
            required : true,
            unique: true,
            trim: true
    }
})

module.exports = mongoose.model("User", userSchema)