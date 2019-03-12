const db = require('../dbConfig.js');

 async function insert(user) {
   return db('users').insert(user).return(user)
};

 async function getAll() {
   return db('users');
};

module.exports = {
   insert, getAll
};