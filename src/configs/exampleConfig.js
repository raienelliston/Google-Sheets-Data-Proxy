//NAME THIS FILE THAT ROUTE THAT YOU WANT TO USE TO FETCH DATA
// Use - to separate words

// You can find this in the URL of your Google Sheet
//docs.google.com/spreadsheets/d/(THE SPREADSHEET ID)/edit?
const spreadSheetID = '1UodW6GUWXVxuCnBtKwYelX8Iu_S6ush2NuY4QPFsRkY'

export default function main () {
    googleSheets.getSpreadSheetValues({
        spreadsheetId: spreadSheetID,
        sheetName: 'New All Data'
    }).then((res) => {
        console.log(res.data.values);
    });

    return;
}