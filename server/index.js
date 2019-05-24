// PACKAGES
require('dotenv').config();
const express = require('express');
const massive = require('massive');

// CONTROLLERS
const ctrl = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('Database Connected');
})

// ENDPOINTS
app.get('/api/houses', ctrl.getAllHouses);
app.post('/api/houses', ctrl.addHouse);
app.delete('/api/deletehouse/:id', ctrl.deleteHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port: ${SERVER_PORT}`);
})