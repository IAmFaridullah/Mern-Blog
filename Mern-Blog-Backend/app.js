const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./Routes/Routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

mongoose.connect('mongodb+srv://iamfaridullah:srwatson33@cluster0.u6woc.mongodb.net/Mern-Blog?retryWrites=true&w=majority')
        .then(() => {
            app.listen(5000, () => {
                console.log('Server listening for requests on port 5000...');
            })
        })
        .catch((err) => {
            console.log(err)
        })

