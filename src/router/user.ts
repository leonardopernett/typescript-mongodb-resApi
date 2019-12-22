import { Router } from 'express'
import userController from  '../controllers/UserController'
class UserRouter {

    public routerUser: Router = Router()
   
    constructor(){
        this.router()
    }
    
    router(){
        this.routerUser.get('/', userController.getUsers)
        this.routerUser.post('/', userController.createUsers)
        this.routerUser.get('/:username', userController.getUser)
        this.routerUser.put('/:username', userController.updateUser)
        this.routerUser.delete('/:username', userController.deleteUser)
    }
}
const userRouter = new UserRouter()

export default userRouter.routerUser