import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import User from './components/user'
import SignUp from './components/signup'

import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})
class App extends Component {
enableLogin(){
this.setState()
}
  render() {
<button onClick={this.enableLogin()}>Login</button>
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>User Registration</h1>
          <SignUp />


        </div>
      </ApolloProvider>
    );
  }
}

export default App;
