const express=require("express")

const router=express.Router()
const hstlMdl=require("../models/hstlModel")

router.post("/hstl",async(req,res)=>{
    let data=req.body
    let hobj=new hstlMdl(data)
    let result=await hobj.save()
    res.json({
        status:"success"
    })
    
})
    

module.exports=router;