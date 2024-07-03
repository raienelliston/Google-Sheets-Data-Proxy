const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { file } = require('googleapis/build/src/apis/file');
require('dotenv').config();

const port = process.env.PORT;
const configPath = path.join(__dirname, 'configs');

const 

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions), express.json());

checkSheetCode() //make this function

setInterval(() => {
    // Add check sheet code here
}, 1000 * 60 * 5);

app.get('/:configName', async (req, res) => {
    fs.readdir(configPath, (err, files) => {

        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
    
        const jsFiles = files.filter(file => file.endsWith('.js'));

        if (!files.includes(`${req.params.configName}.js`)) {
            res.status(404).send('Config not found');
            return;
        } 

        jsFiles.forEach(file => {
            const filePath = path.join(configPath, file);
            const module = require(filePath);

            module.main();
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});