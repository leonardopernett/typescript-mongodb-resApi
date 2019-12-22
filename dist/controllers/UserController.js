"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserController {
    async getUsers(req, res) {
        const newUser = await User_1.default.find();
        res.json(newUser);
    }
    async createUsers(req, res) {
        const { name, email, password, username } = req.body;
        const newUser = new User_1.default({ name, email, password, username });
        await newUser.save();
        res.send('user created');
    }
    async getUser(req, res) {
        const user = await User_1.default.findOne({ username: req.params.username }).populate('posts', 'title url -id');
        res.json(user);
    }
    async updateUser(req, res) {
        const { username } = req.params;
        const user = await User_1.default.findOneAndUpdate(username, req.body, { new: true });
        res.json(user);
    }
    async deleteUser(req, res) {
        await User_1.default.findOneAndDelete(req.params.username);
        res.send('delete');
    }
}
const userController = new UserController();
exports.default = userController;
