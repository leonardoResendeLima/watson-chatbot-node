const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser'),
    DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
    DEFAULT_PARAMETER_LIMIT = 10000

const bodypParserJsonConfig = () => ({
    parameterLimit : DEFAULT_PARAMETER_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
})

const ask = require('./controller').ask;

app.use(bodyParser.json(bodypParserJsonConfig()))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/ask', ask)

app.listen(3000, () => console.log('Listening on port 3000'))