import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Songlist from './component/Songlist';
import App from './component/App';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import SongCreate from './component/Songcreate';
import SongDetails from './component/SongDetails';
const client = new ApolloClient({});
const Root = () => {
  return (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Songlist}/>
      <Route path ="songs/:id" component={SongDetails}/>
      <Route path ="songs/new" component ={SongCreate}/>
    
    </Route>
    </Router>
  </ApolloProvider>
  )};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
