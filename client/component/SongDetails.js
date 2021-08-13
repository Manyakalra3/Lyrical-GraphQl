import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import fetchone from '../queries/fetchone';
import {Link} from 'react-router';
import LyricsCreate from './LyricsCreate';
class SongDetails extends Component{
    render(){
            console.log(this.props);
            const {song} = this.props.data;
            if(!song){
                return <div>LOADING...</div>
            }else{
        return(
            <div>
              
              <h3>hiii from {song.title}</h3>
             <Link to ="/">Back</Link>
             <LyricsCreate songId={this.props.params.id}/>
            </div>
        )
        }
        
    }
}
export default graphql(fetchone,{
options:(props)=>{
    return {variables:{
        id:props.params.id
    }}
}
})(SongDetails);
 