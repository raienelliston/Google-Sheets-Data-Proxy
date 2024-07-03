const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions), express.json());

checkSheetCode() //make this function

setInterval(() => {
    // Add check sheet code here
}, 1000 * 60 * 5);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});