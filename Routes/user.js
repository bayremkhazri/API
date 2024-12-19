const express=require('express');
const usermodel=require('../Model/User');
const User = require('../Model/User');
const router=express.Router()

//test 
router.get('/test',(req,res)=> {
    res.send('hello bayrem')
})
router.post('/add',async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        const newuser= new User({name,email})
        await newuser.save();
        res.status(200).send({msg:'user aded',newuser})
    } catch (error) {
        res.status(400).send({msg:'can not aded'})
    }

})
router.get('/all',async(req,res)=> {
    try{
        const listuser= await User.find();
        res.status(200).send({msg:'voila la liste',listuser})
    }catch (error) {
        res.status(400).send({msg:'can not gets'})
    }
})
router.delete('/:_id',async(req,res)=>{
    try{
        const{_id}=req.params;
        await user.findOneAndDelete({_id});
        res.status(200).send({msg:'user deleted'})
    } catch (error) {
        res.status(400).send({msg:'can not gets'})
    }
})

router.put('/:_id',async(req,res)=>{
    try {
    const {_id}=req.params;
    const upadateuser = await user.updateOne({_id},{$set:{...req.body}})
    res.status(200).send({msg:'user updated',upadateuser})
} catch (error) {
    res.status(400).send({msg:'can not updated'})
}
})
router.get('/:_id',async(req,res)=> {
    try {

        const contactone= await user.findOne({_id:req.params._id})
        res.status(200).send({msg:'user:',contactone})
    } catch (error) {
        res.status(400).send({msg:'can not find'})
    }
})







module.exports=router;