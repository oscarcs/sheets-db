const functions = require('@google-cloud/functions-framework');
const { google } = require('googleapis');

const spreadsheetId = '1a_ilgoY0Y-1d99btzwovtEVR3Rd3bsUwPppBd8YApW4';
let sheets;
let auth;

// Entry point
functions.http('sheets-db', async (req, res) => {

    auth = await google.auth.getClient({
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    });
    sheets = google.sheets('v4', auth);

    let cell = (await getCell('Sheet1', 'A1')).data.values[0][0];

    res.send(`Hello ${cell || req.query.name || req.body.name || 'World'}!`);
});

async function getCell(sheetName, range) {
    return await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: range,
        auth
    });
}