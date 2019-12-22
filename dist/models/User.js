"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, require: true },
    username: { type: String },
    created_at: { type: Date, default: Date.now() },
    posts: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Post'
        }]
});
UserSchema.methods.encryptPassword = async function (password) {
    const salt = await bcryptjs_1.default.genSalt(10);
    return await bcryptjs_1.default.hash(password, salt);
};
UserSchema.methods.ValidatePassword = async function (password) {
    return await bcryptjs_1.default.compare(password, this.password);
};
exports.default = mongoose_1.model('User', UserSchema);
