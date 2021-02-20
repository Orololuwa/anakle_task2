import React from 'react';
import classes from './SideBar.module.scss';
import {MenuOutline} from 'react-ionicons';
import Logo from '../Logo/Logo';

const sideBar = (props) => {
    
    return (
        <div className={classes.SideBar}>
            <div  className={classes.header}>
                <Logo withText />
                <MenuOutline
                    color={'#2F4CDD'} 
                    title={"menuIcon"}
                    height="5rem"
                    width="5rem"
                    onClick={props.clicked}
                />
            </div>
        </div>
    );
}
export default sideBar