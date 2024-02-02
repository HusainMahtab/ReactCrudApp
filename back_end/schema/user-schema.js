import mongoose from 'mongoose'

const model=mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  }
})


const userSchema=mongoose.model("user",model)

export default userSchema;
