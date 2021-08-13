import React,{Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Hash } from 'history';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import { createHashHistory } from 'history';
import query from '../queries/fetchSong';
class SongCreate extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            title:''
        };
    
      
    }
    onSubmit(event){
        event.preventDefault();
      
        this.props.mutate({
            variables:{
                title:this.state.title,
               
            },
            refetchQueries: [{query:query}]
        }).then(()=> hashHistory.push('/'))
        
    }
    
    render(){
   
        return(
            <div>
                <Link to ="/">
                    back
                </Link>
                <h3>Create A new Song</h3>
                
                <form onSubmit ={this.onSubmit.bind(this)}>
                    <label>Song title</label>
                    <input onChange={event=>this.setState({title:event.target.value})}
                    value={this.state.title}
                 />
                </form>
            </div>
        )
    }
}
const mutation =gql`
mutation AddSong($title:String){
    addSong(title:$title){
        title
    }
}`;

export default graphql(mutation)(SongCreate);