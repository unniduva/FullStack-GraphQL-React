const {UserDBModel} =require('./DBmodel')

const resolvers = {
    Query: {
        users: (root,{age}) => {
            return UserDBModel.find({age:age})
        },
        user:(root,{email})=>{
            return UserDBModel.findOne({email:email})
        }
    },
    
    Mutation:{
        addUser:(root,{name,age,email})=>{
            const newUser=new UserDBModel({name:name,age:age,email:email})
            return newUser.save()
        }/* ,
       /*  deleteBook:(root,{id})=>{
            return UserDBModel.findOneAndRemove({book_id: id});
        },
        updateBook:(root,{id,name})=>{
            return UserDBModel.findOneAndUpdate({book_id: id}, {name: name});
        } */ 
    }
};

module.exports={resolvers}




/* 
Query: {
    authors: (root, {age}) => {
        return authorModel.find({age: age})
    },
    author: (root, {id}) => {
        return authorModel.findOne({id: id}); 
    }
},
Mutation: {
    addAuthor: (root, {name, age, books}) => {
        const author = new authorModel({age: age, name: name, books: books});
        return author.save();
    },
    deleteAuthor: (root, {id}) => {
        return authorModel.findOneAndRemove({id: id});
    },
    updateAuthor: (root, {id, name}) => {
        return authorModel.findOneAndUpdate({id: id}, {name: name});
    }
} */