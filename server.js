const express = require('express');
const fs = require('fs');
const cors = require('cors'); // <-- Add this line
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <-- And this line

app.get('/api/rainworld', (req, res) => {
  fs.readFile('rainworld-api.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not read data file' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Rain World API running at http://localhost:${PORT}/api/rainworld`);
});
