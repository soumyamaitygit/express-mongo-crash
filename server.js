const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use('/api/contacts',require('./routes/contactsRoute'));

app.listen(port,()=>{
    console.log(`I am running on port ${port}`)
})