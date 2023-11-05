// server.js
const express = require('express');
const bodyParser = require('body-parser');
const rateRoutes = require('./routes/rateRoutes'); // استيراد ملف التوجيه

const port = 4000;

const app = express();

// Use body-parser for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON bodies

// Use the rateRoutes for routing
app.use('/', rateRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


