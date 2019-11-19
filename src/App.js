import React, { Component } from 'react';
import classes from './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <h1>Resource Allocation Application</h1>
        </header>
        <Layout />
      </div>
    );
  }
}

export default App;
