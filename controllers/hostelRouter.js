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

router.get("/viewall",async(req,res)=>{
    let data=await hstlMdl.find()
    res.json(data)
})

router.post("/patsearch",async(req,res)=>{
    let input=req.body
    let data=await hstlMdl.find(input)
    res.json(data)
})


module.exports=router;