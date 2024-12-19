const mongoose=require('mongoose');
const{Schema,model}=mongoose

const UserSchema= new Schema({
    firstname:{
        type:String,
        
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    }

})

module.exports =User=model("user",UserSchema);