const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Serve static files (JSON, images, etc) from the root directory
app.use(express.static(__dirname));

// Your API endpoint for rainworld
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
