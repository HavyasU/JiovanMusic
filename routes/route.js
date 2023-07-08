const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path')
const app = express();
// const mongoose = require('mongoose');
const router = express.Router()
// const express = require('express');
const { getChart } = require('billboard-top-100');
const mongoose = require('mongoose')
// app.use(express.static(path.join(__dirname, 'static')))
// app.use(express.static(path.join(__dirname,'public')))
router.get('/',(req,res)=>{
    res.render('trending'); 
});


router.get('/search',(req,res)=>{
    res.render('search')
})

router.get('/download',(req,res)=>{
  res.render('download')
})
router.get('/RateUs',(req,res)=>{
  res.render('RateUs')
})
router.get('/api/bb', (req, res) => {
  let topday;
  function getLastSaturday(theDate) {
    var dateToUse = new Date(theDate);
    var start = dateToUse.getDay() == 0 ? 7 : dateToUse.getDay();
    var target = 6; // Saturday
  
    if (target >= start)
        target -= 7;
    var lastSaturday = dateToUse.addDays(target - start);
    topday = lastSaturday;
  }
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  getLastSaturday(Date.now())
  
  topday = topday.toISOString().slice(0, 10);
  // console.log(date)
  getChart('hot-100', topday, (err, chart) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const songs = chart.songs.map(song => song.title);
    res.send({ songs });
  });
  });
  
  
module.exports = router;

