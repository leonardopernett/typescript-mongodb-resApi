"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controllers/PostController"));
class PostRouter {
    constructor() {
        this.routerPost = express_1.Router();
        this.router();
    }
    router() {
        this.routerPost.get('/', PostController_1.default.getPosts);
        this.routerPost.post('/', PostController_1.default.createPosts);
        this.routerPost.get('/:url', PostController_1.default.getPost);
        this.routerPost.put('/:url', PostController_1.default.updatePosts);
        this.routerPost.delete('/:url', PostController_1.default.deletePosts);
    }
}
const postRouter = new PostRouter();
exports.default = postRouter.routerPost;
