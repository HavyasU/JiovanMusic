
const express = require('express')
const dsroute = express.Router();
const mongoose = require('mongoose');
const connectdb = async()=>{
  await mongoose.connect("mongodb://127.0.0.1:27017/jiovan");
}
connectdb().then(()=> console.log('i think conected')).catch((err)=>{
  console.log(err)
});

let reviewschema = mongoose.Schema({
  name:String,
  rate:Number,
  Review:String
})
let reviews = mongoose.model('reviews',reviewschema)

let userreview ;
dsroute.post('/RateUs',(req,res)=>{
  userreview =  new reviews(
    {
      name:req.body.name,
      rate:req.body.rating,
      Review:req.body.userreview
    })
    setTimeout(() => {
      userreview.save();
    }, 1000);
    
  })
  let data;
  const deleteall = async() =>{
      data = await reviews.deleteMany({})
      console.log(data)
}
dsroute.get('/reviewdata-havyas',(req,res)=>{
  let rdata;
  const finddata = async() =>{
    rdata = await reviews.find({})
    console.log(rdata)
    res.send(rdata)
}
finddata();
})
// deleteall();
module.exports = dsroute;
