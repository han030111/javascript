const ex= require("express")
const app=ex()
const port=300
app.get("/",(req,res)=>{
  res.send("hello world")
})
app.listen(port,()=>{
  console.log(
    "exemple${port}"
  )
})