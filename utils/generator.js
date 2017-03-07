const nameGen = require('node-random-name');
const crypto = require('crypto');
const lorem = require('lorem-ipsum');

exports.createUserObj = function () {
    const gender = Math.random() > 0.4 ? 'female' : 'male';
    const name = nameGen({ gender });

    return {
        gender,
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        password: crypto.createHmac('sha1', lorem({ count: 1, units: 'words'}) + Date.now().toString()).digest('hex'),
        month: Math.floor(Math.random()*9),
        email: name.split(' ').join(`${lorem({ count: 1, units: 'words'})}`),
        day: Math.floor(Math.random()*28),
        year: Math.floor(Math.random()*30) + 1970
    }
};