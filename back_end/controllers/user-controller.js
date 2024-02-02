

import User from '../schema/user-schema.js'

export const addUser=async(req,res)=>{

try{
  const user=req.body;
  const newUser=new User(user)
  console.log(newUser)
  await newUser.save();
  res.status(201).json(newUser)
}catch(err){
res.status(409).json({message:err.message})
}
}


export const getUsers = async (req, res) => {
  try {

    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser=async(req,res)=>{
  try{
    const users=await User.find({_id:req.params.id})
    res.status(201).json(users)
  }catch(err){
  res.status(500).json({message:err.message})
  }
}


export const editUser=async(req,res)=>{
  let user=req.body;
  const editUser=new User(user)
  try{
    await User.updateOne({_id:req.params.id},editUser)
    res.status(201).json(editUser)
  }catch(err){
    res.status(409).json({message:err.message})
  }
}


export  const deleteUser=async(req,res)=>{
  try{
    await User.deleteOne({_id:req.params.id})
    res.status(201).json({message:"User Deleted Successfully"})
  }catch(err){
    res.status(409).json({message:err.message})
  }
}
