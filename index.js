require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routers/router');
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});