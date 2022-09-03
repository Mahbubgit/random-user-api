const express = require('express');
const cors = require('cors');
const dbConnect = require('./utility/dbConnect');
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/v1/users.route');


// middleware
app.use(cors());
app.use(express.json());
// Database connect
dbConnect();

// API/Version
app.use("/user", userRoutes);

app.get('/', (req, res) => {
    res.send('My Random User API is running ..')
});

app.all("*", (req, res) => {
    res.send("No route found..");
});

app.listen(port, () => {
    console.log('My Random user API is running on port', port);
})