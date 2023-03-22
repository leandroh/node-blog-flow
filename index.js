const express = require('express');
const app = express();
const marked = require('marked');
const axios = require('axios');

app.use(express.json());

app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  const html = marked.parse(content);

  res.send(html);
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});
