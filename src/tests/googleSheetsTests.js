const googleSheets = require('../googleSheetsAPI/googleSheetsAPI');
require('dotenv').config();

const spreadsheetId = '1UodW6GUWXVxuCnBtKwYelX8Iu_S6ush2NuY4QPFsRkY'
const sheetName = 'New All Data';

function main() {
    googleSheets.getSpreadSheetValues({
        spreadsheetId: spreadsheetId,
        sheetName: sheetName
    }).then((res) => {
        console.log(res.data.values);
    });
}

function createTemplate() {
    googleSheets.createSpreadSheetTemplate({
        sheetName: sheetName,
        values: [['test', 'test', 'test']]
    }).then((res) => {
        console.log(res);
    });
}

main();