
const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY
} = process.env;
const { GoogleSpreadsheet } = require('google-spreadsheet');

function hasEventData( eventRow ){
    return eventRow.Date && eventRow.Event;
}

function isValidDate( date ){
    return date.getTime() === date.getTime();
}

function getKey( key ){
    return /_/.test( key )
        ? key.replace( /_/g, '\n' )
        : key;
}

async function getUpcomingEvents(){
    const doc = new GoogleSpreadsheet('1iE331Dv-jfSXDhN_sigotfsn1ejGRJOc69MHOK6-xWc');
    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: getKey( GOOGLE_PRIVATE_KEY ),
    });

    await doc.loadInfo(); // loads document properties and worksheets
    
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const today = new Date();

    const eventData = rows
        .filter( row => {
            const eventDate = new Date( row.Date );
            return hasEventData( row )
                && isValidDate( eventDate )
                && eventDate > today;
        })
        .map(row => {
            return {
                date: new Date(row.Date),
                event: row.Event,
                description: row.Description
            };
        });

    eventData.sort( ( a, b ) => {
        return a.date < b.date ? -1 : 1;
    });

    return eventData;
}

exports.handler = async function (event, context, callback) {

    callback(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json'
        },
        statusCode: 200,
        body: JSON.stringify({
            data: await getUpcomingEvents()
        })
    });
};