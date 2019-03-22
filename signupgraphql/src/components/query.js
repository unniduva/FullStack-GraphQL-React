import { gql } from "apollo-boost";
const getUserQuery = gql`
{ Query user($email:String){
    user(email:$email) {
        name
        age
        email
        user_id
    }
}
   
}
`;



const AddUserMutation = gql`
    mutation addUser($name: String!, $age: String!, $email: String!){
        addUser(name: $name, age: $age, email: $email){
            name
            
        }
    }
`;

export  {AddUserMutation,getUserQuery}

/* 
import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation }; */