const path = require('path');
const { hashPass } = require(path.resolve(__dirname, '../../server/auth'));

exports.seed = (db, Promise) => {
  // // Deletes ALL existing entries
  // return db('users').del()
  // .then(() =>{
  //   // Inserts seed entries
  //   return db('users').insert([
  //     {
  //       username: 'buzz',
  //       password: hashPass('moonshot'),
  //     },
  //   ]);
  // });
};
