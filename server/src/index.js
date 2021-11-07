const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const express = require('express')
const app = express()
app.use(express.json());

const serviceAccount = require('./database/serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount)});

const db = getFirestore();


//CREATE

//READ

//UPDATE

//DELETE



//express server settings
const port = 3001
const host = 'localhost'
const protocol = 'http://'

app.listen(port, () => {
    console.log('Server is running on '+protocol+host+':'+port+'/')
});