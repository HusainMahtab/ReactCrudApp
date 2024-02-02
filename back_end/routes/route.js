import express from 'express'

import {addUser,getUsers,getUser,editUser,deleteUser} from '../controllers/user-controller.js'


const router=express.Router()

router.post("/adduser",addUser)
router.get("/alluser",getUsers)
router.get("/:id",getUser)
router.put("/:id",editUser)
router.delete("/:id",deleteUser)

export default router;
