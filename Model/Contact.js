const mongoose=require('mongoose');
const{Schema,model}=mongoose

const ContactSchema= new Schema({
    
    
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    }

})

module.exports =Contact=model("Contact",ContactSchema);