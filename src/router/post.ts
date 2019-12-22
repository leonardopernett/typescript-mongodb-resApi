import { Router } from 'express'
import postController from '../controllers/PostController'
class PostRouter {

    public routerPost: Router = Router()
   
    constructor(){
        this.router()
    }
    
    router(){
        this.routerPost.get('/', postController.getPosts)
        this.routerPost.post('/', postController.createPosts)
        this.routerPost.get('/:url', postController.getPost)
        this.routerPost.put('/:url', postController.updatePosts)
        this.routerPost.delete('/:url', postController.deletePosts)
    }
}

const postRouter = new PostRouter()

export default postRouter.routerPost