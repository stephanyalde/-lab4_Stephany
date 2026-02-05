const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
app.get('/', (req, res) => {
  res.send('Commiting Changesssss');
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});
