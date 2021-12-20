const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api', (req, res) => {
  res.send({ express: 'Server connected to react' });
});