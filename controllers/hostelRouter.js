const express=require("express")

const router=express.Router()
const hstlMdl=require("../models/hstlModel")

router.post("/hstl",(req,res)=>{
    res.send("helo")
})
    

module.exports=router;