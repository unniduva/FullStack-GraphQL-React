const mongoose= require('mongoose');
const uuid =require('node-uuid');
const schema = mongoose.Schema;


const UserSchema = new schema({
    user_id: {type: String, default: uuid.v1},
    name: String,
    age: String,
    email: String
});


const UserDBModel = mongoose.model('user', UserSchema);
module.exports={UserDBModel};


/*Commments
 const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
 */
