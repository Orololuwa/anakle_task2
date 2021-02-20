import React from 'react';
import classes from './Logo.module.scss';
import Logo from '../../assets/logo.png';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <div className={classes.LogoWrapper}>
                <img src={Logo} alt="Brand Logo"/>
            </div>
            <p className={props.withText? classes.withText : null}>Davour</p>
        </div>
    );
}

export default logo;