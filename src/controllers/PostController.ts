import {Request, Response } from 'express'
import  Post from '../models/posts'
class PostController {

   
   async  getPosts(req:Request, res:Response){
        const newpost = await Post.find()
        res.json(newpost)
    }

    async createPosts(req:Request, res:Response){
        const {title, url , content, image} =req.body
        const newPost = {
            title,
            url,
            content,
            image
        }
       const post = await new Post(newPost)
                    await post.save()
       res.send('post created')
    }

    async getPost(req:Request, res:Response){
        const post = await Post.findOne({url:req.params.url})
        res.json(post)
    }

   async  updatePosts(req:Request, res:Response){
        const {url} = req.params
        const post =  await Post.findOneAndUpdate(url, req.body, {new:true})
         res.json(post)
    }
    async deletePosts(req:Request, res:Response){
       await Post.findOneAndDelete(req.params.url)
       res.send('delete')
    }
}

const postController = new PostController()

export default postController