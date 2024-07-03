const { google } = require('googleapis');
const { get } = require('../routes/routes');
const { GoogleAuth } = google.auth;
const sheets = google.sheets('v4');

const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

async function getAuthToken() {
  const auth = new GoogleAuth({
    scopes: SCOPES
  });
  return auth;
}

async function getSpreadSheet({ spreadsheetId }) {
  const auth = await getAuthToken();
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
    key: 'AIzaSyBSK1wy2XRqyaGlKk_KTsWpKWahH0xLYdw'
  });
  return res;
}

async function getSpreadSheetValues({ spreadsheetId, sheetName }) {
  const auth = await getAuthToken();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName,
    key: 'AIzaSyBSK1wy2XRqyaGlKk_KTsWpKWahH0xLYdw'
  });
  return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues
}