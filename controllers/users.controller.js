// const randomUser = require("../middleware/randomUser");
const random = require('random');
const users = [
    {
        "id": 1,
        "gender": "Male",
        "name": "Kalam",
        "contact": "0124555877",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/8d3YgcW"
    },
    {
        "id": 2,
        "gender": "Female",
        "name": "Maksuda",
        "contact": "01244444457",
        "address": "Cumilla, Bangladesh",
        "photoUrl": "https://ibb.co/2g7281c"
    },
    {
        "id": 3,
        "gender": "Male",
        "name": "Rahim",
        "contact": "0165656597",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/dcwjmJY"
    },
    {
        "id": 4,
        "gender": "Male",
        "name": "Kader",
        "contact": "013555777",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/8d3YgcW"
    },
    {
        "id": 5,
        "gender": "Female",
        "name": "Kanta",
        "contact": "0154777711",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/Y8fQzZC"
    },
    {
        "id": 6,
        "gender": "Male",
        "name": "Sabbir",
        "contact": "0134478777",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/gb1d3Zx"
    },
    {
        "id": 7,
        "gender": "Female",
        "name": "Maya",
        "contact": "0225777711",
        "address": "Dhaka, Bangladesh",
        "photoUrl": "https://ibb.co/7z7zfsj"
    }
];

module.exports.loadUser = async (req, res) => {
    // let data = await fetch('../data/users.json');
    // users = await data.json();
    res.send(users);
}

// Show random user API
module.exports.getRandomUser = (req, res) => {
    const userId = random.int((min = 1), (max = 7));
    console.log(userId);
    const randomUser = users.find(user => user.id === Number(userId));
    res.send(randomUser);
}

// Show all user API
module.exports.getAllUsers = async (req, res, next) => {
    const { limit } = req.query;
    res.send(users.slice(0, limit));
};

// Show an user detail API
module.exports.getUserDetails = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const findUser = users.find(user => user.id === Number(id));
    res.send(findUser);
};

// Add a user API
module.exports.saveAUser = (req, res) => {
    const userId = random.int((min = 1), (max = 7));
    const randomUser = users.find(user => user.id === Number(userId));
    // console.log(req.query);
    // users.push(req.body);
    users.push(randomUser);
    res.send(users);
};

// Update API
module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    const newUser = users.find(user => user.id === Number(id));

    newUser.id = id;
    newUser.name = req.body.name;
    res.send(newUser);
};

// Delete API
module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const remainingUser = users.filter(user => user.id !== Number(id));
    res.send(remainingUser);
};
