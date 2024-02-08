const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
const hosRout=require("./controllers/hostelRouter")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Athirani26:athirani69@cluster0.w4km12l.mongodb.net/HostelDb?retryWrites=true&w=majority", 
{
  useNewUrlParser:true
}
)

app.use("/api/hostel",hosRout)

app.listen(3001,()=>{
    console.log("running")
})

