import {Schema, model, Document} from 'mongoose'
import bcrypt from 'bcryptjs';



const UserSchema = new Schema({
    name:{type:String},
    email:{type:String, unique:true , required:true},
    password:{type:String, require:true},
    username:{type:String},
    created_at:{type:Date, default: Date.now()},
    posts: [{
        type: Schema.Types.ObjectId,
        ref:'Post'
    }]
   
})

UserSchema.methods.encryptPassword = async function(password:string) {
    const salt = await bcrypt.genSalt(10)
    return  await bcrypt.hash(password, salt);
      
}

UserSchema.methods.ValidatePassword = async  function(password: string){
   return await bcrypt.compare(password, this.password)
}  

export default model('User', UserSchema)