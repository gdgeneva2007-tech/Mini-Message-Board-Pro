const db=require("../db/queries")
const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("form",{title:"Add New Message"})
})

router.post("/",async (req,res)=>{
    const msg={text:req.body.text,user:req.body.user}
    await db.insertMessage(msg)
    res.redirect("/")
})

module.exports=router;