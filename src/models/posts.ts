import {Schema, model, Document} from 'mongoose'


const PostSchema = new Schema({
    title:{type:String},
    url:{type:String, unique:true , lowercase:true},
    content:{type:String, require:true},
    image:{type:String},
    created_at:{type:Date, default: Date.now()},
    updated_at: Date
})



export default model('Post', PostSchema)