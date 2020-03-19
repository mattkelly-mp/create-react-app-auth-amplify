import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import * as queries from './graphql/queries';

Amplify.configure(aws_exports);

class App extends Component {
  render() {

    (async () => {
      const allTodos = await API.graphql(graphqlOperation(queries.listTodos));

      console.log(allTodos);
    })();
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
