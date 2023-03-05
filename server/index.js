const express = require('express');
const app = express();
app.use('/api/app', require('./router/api/app'));
app.listen(8000, () => {
  console.log(`Server start : ` + 8000);
});