"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRouter {
    constructor() {
        this.routerUser = express_1.Router();
        this.router();
    }
    router() {
        this.routerUser.get('/', UserController_1.default.getUsers);
        this.routerUser.post('/', UserController_1.default.createUsers);
        this.routerUser.get('/:username', UserController_1.default.getUser);
        this.routerUser.put('/:username', UserController_1.default.updateUser);
        this.routerUser.delete('/:username', UserController_1.default.deleteUser);
    }
}
const userRouter = new UserRouter();
exports.default = userRouter.routerUser;
