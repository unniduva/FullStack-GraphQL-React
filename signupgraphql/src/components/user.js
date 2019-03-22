import React, { Component } from 'react';
import {getUserQuery} from './query'
import { graphql } from 'react-apollo';


class User extends Component {
    displayuser(){
        var all=this.props.data
        console.log(this.props.data);
        if (all.loading){
        
        }else{
            return(   <div><ul>
                <li>{all.user.name}</li>
                <li>{all.user.age}</li>
                <li>{all.user.email}</li>
            </ul></div>)
        }
         
    }
    render(){
       

      
       
        
        /* var items= all.map((item) => {
            return (<li  key={item}>{item}</li>);
        }); */
        return(
            <div>
           {this.displayuser()}
            </div>
            /*  all.map() */
            
            );
        }
    }
    
    export default graphql(getUserQuery)(User);