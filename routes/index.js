const db=require("../db/queries")

const express=require("express")
const router=express.Router();

router.get("/",async (req ,res)=>{
    let display=await db.getAllMessages();
    res.render("index",{title:"All Messages",messages:display})
})

router.get("/message/:id",async (req,res)=>{
    const id=parseInt(req.params.id)
    
    let display=await db.searchMessage(id)
    if(!display){
        res.status(404).render("notFound",{title:"Message Not Found"})
    }
    res.render("messageDetail",{title:"Message Detail",message:display[0]})
})

module.exports=router;

