const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { MONGO_DB_CONFIG } = require('./config/app.config');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected');
}, (error) => {
    console.log('DB connected Error =>', error);
});

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/app.routes'));

app.listen(3000, function() {
    console.log('App iniciada en el puerto 3000');
});