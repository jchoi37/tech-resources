const { google } = require('googleapis')

const creds = require('./client_secret.json')


const client = new google.auth.JWT(
  creds.client_email,
  null,
  creds.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly']
)

client.authorize(function(err){

  if(err){
    console.log(err)
    return
  } else{
    console.log('connected')
    gsrun(client)
  }
})

async function gsrun(cl){

  const gsapi = google.sheets({ version:'v4', auth: cl })

  const opt = {
    spreadsheetId: '1OCT2zZCzojnp5edANyUiSzQqytnT-fKLvrmEBmwd5hc',
    range:'Data!A1:D114'
  }

  let data = await gsapi.spreadsheets.values.get(opt)
  let dataArray = data.data.values
}
