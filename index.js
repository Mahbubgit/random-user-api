const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('My Random User API is running ..')
});


app.listen(port, () => {
    console.log('My Random user API is running on port', port);
})