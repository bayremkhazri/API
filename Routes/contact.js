const express=require('express');
const Contact=require('../Model/Contact');
const router=express.Router()

//test 
router.get('/test',(req,res)=> {
    res.send('hello bayrem')
})

// kifeh nzid contact fel base 
router.post('/add',async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        const newContact= new Contact({name,email,phone})
        await newContact.save();
        res.status(200).send({msg:'contact aded',newContact})
    } catch (error) {
        res.status(400).send({msg:'can not aded'})
    }

})

// afficher tous les contacts
router.get('/all',async(req,res)=> {
    try{
        const listcontacts= await Contact.find();
        res.status(200).send({msg:'voila la liste',listcontacts})
    }catch (error) {
        res.status(400).send({msg:'can not gets'})
    }
})

// bsh tfassakh wa7ed

router.delete('/:_id',async(req,res)=>{
    try{
        const{_id}=req.params;
        await Contact.findOneAndDelete({_id});
        res.status(200).send({msg:'contact deleted'})
    } catch (error) {
        res.status(400).send({msg:'can not gets'})
    }
})

// bsh taml modification ala contact
router.put('/:_id',async(req,res)=>{
    try {
    const {_id}=req.params;
    const upadateuser = await Contact.updateOne({_id},{$set:{...req.body}})
    res.status(200).send({msg:'contact updated',upadateuser})
} catch (error) {
    res.status(400).send({msg:'can not updated'})
}
})



// taffichhier wa7ed kahao bel id mte3o
router.get('/:_id',async(req,res)=> {
    try {

        const contactone= await Contact.findOne({_id:req.params._id})
        res.status(200).send({msg:'contact:',contactone})
    } catch (error) {
        res.status(400).send({msg:'can not find'})
    }
})



module.exports=router;