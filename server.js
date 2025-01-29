const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;
const buildType = process.env.BUILD_TYPE || 'test';
const distPath = path.join(__dirname, `dist/${buildType}/voffer/browser`);

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
