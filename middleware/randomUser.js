const random = require('random');

const randomUser = (req, res, next) =>{
    const userId = random.int((min = 0), (max = 7));
    console.log(userId);
    // res.send(userId);
    next();
};

module.exports = randomUser;