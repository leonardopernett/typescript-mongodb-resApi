"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = __importDefault(require("../models/posts"));
class PostController {
    async getPosts(req, res) {
        const newpost = await posts_1.default.find();
        res.json(newpost);
    }
    async createPosts(req, res) {
        const { title, url, content, image } = req.body;
        const newPost = {
            title,
            url,
            content,
            image
        };
        const post = await new posts_1.default(newPost);
        await post.save();
        res.send('post created');
    }
    async getPost(req, res) {
        const post = await posts_1.default.findOne({ url: req.params.url });
        res.json(post);
    }
    async updatePosts(req, res) {
        const { url } = req.params;
        const post = await posts_1.default.findOneAndUpdate(url, req.body, { new: true });
        res.json(post);
    }
    async deletePosts(req, res) {
        await posts_1.default.findOneAndDelete(req.params.url);
        res.send('delete');
    }
}
const postController = new PostController();
exports.default = postController;
