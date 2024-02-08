const mongoose=require("mongoose")

const hstSchema=new mongoose.Schema(
    {
       name:String,
       dep:String,
       phoneno:String,
       admsno:String

    }
)

module.exports=mongoose.model("hostel",hstSchema)