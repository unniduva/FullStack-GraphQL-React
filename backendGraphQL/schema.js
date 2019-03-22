//import {makeExecutableSchema} from 'graphql-tools'
//const resolvers=require('./resolver')

const { gql } = require('apollo-server');
const typeDefs = gql`
type User {
    user_id:String,
    name:String,
    age: String,
    email:String
}

type Query {
    users(age:String): [User]
    user(email:String):User
}

type Mutation {
    addUser(name: String!, age: String!, email: String!): User
    #deleteBook(book_id: String!): Book
    #updateBook(book_id: String!, name: String!): Book
}
`;
//const schema = makeExecutableSchema({typeDefs, resolvers});
/* module.exports={typeDefs,schema}  */ 

module.exports={typeDefs}


/* 
const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [String]
}
type Query {
    authors(age: Int): [Author]
    author(id: String): Author
}
type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
}
`;  */