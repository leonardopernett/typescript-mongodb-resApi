import {Request, Response } from 'express'
import User from '../models/User'

class UserController {
        async  getUsers(req:Request, res:Response){
            const newUser = await User.find()
            res.json(newUser)
        }

     async createUsers(req:Request, res:Response){
         const {name,email, password , username} = req.body    
        const newUser = new User({name, email, password, username});
             await newUser.save()         
           res.send('user created')
        }

        async getUser(req:Request, res:Response){
            const user = await User.findOne({username:req.params.username}).populate('posts','title url -id')
            res.json(user)
        }

        async  updateUser(req:Request, res:Response){
            const {username} = req.params
            const user =  await User.findOneAndUpdate(username, req.body, {new:true})
            res.json(user)
        }
        async deleteUser(req:Request, res:Response){
        await User.findOneAndDelete(req.params.username)
        res.send('delete')
        }
}


const userController = new UserController()
export default userController