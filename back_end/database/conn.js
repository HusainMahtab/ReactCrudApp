
import mongoose from 'mongoose'

const connection=async()=>{
  try{
    await  mongoose.connect("mongodb://localhost:27017/crudDb",{
      UseUnifiedTopology:true,
      UseNewUrlParser:true,
    })
    console.log("Db connected Successfuly")
  }catch(err){
    console.log("db is not Connect",err)
  }
}
connection()

export default connection;
