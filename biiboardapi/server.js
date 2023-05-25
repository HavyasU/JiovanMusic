const express = require('express');
const { getChart } = require('billboard-top-100');

const app = express();
const port = 3000;

app.get('/api/billboard-top-100', (req, res) => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  getChart('hot-100', today, (err, chart) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    
    const songs = chart.songs.map(song => song.title);
    res.json({ songs });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
