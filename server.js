require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'public', 'index.html'))});

const PORT = process.env.PORT || 4350;

app.listen(PORT, () => console.log(`devserver is up and running on port ${PORT}`));
