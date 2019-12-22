"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String },
    url: { type: String, unique: true, lowercase: true },
    content: { type: String, require: true },
    image: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: Date
});
exports.default = mongoose_1.model('Post', PostSchema);
