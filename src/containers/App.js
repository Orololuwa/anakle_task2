import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Content from '../components/Content/Content';
import classes from './App.module.scss';

class App extends Component {

  render(){
    return(
      <div className={classes.App}>
        <div className={classes.sideComp}>SideBar bar and the review component could not be completed bacause of time</div>        
        <div className={classes.mainComp}>
          <Nav />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
