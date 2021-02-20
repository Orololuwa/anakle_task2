import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Content from '../components/Content/Content';
import SideBar from '../components/SideBar/SideBar';
import classes from './App.module.scss';

class App extends Component {
  state = {
    showSideBar: false
  }

  toggleSideBarHandler = () => {
    this.setState((prevState) => {
      return {
        showSideBar: !prevState.showSideBar
      }
    })
  }

  render(){
    let sideClasses = [classes.sideComp];
    let mainClasses = [classes.mainComp];
    if (!this.state.showSideBar){
      sideClasses = [classes.sideComp, classes.hideSideBar];
      mainClasses = [classes.mainComp,classes.fullWidth];
    }

    return(
      <div className={classes.App}>
        <div className={sideClasses.join(" ")}>
          <SideBar 
            clicked={this.toggleSideBarHandler}
            show={this.state.showSideBar}
          />
        </div>

        <div className={mainClasses.join(" ")}>
          <Nav 
            clicked={this.toggleSideBarHandler}
            show={this.state.showSideBar}
          />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
