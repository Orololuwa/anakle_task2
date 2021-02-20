import React from 'react';

import Logo from '../Logo/Logo';

import classes from './Nav.module.css';

import { SearchOutline,NotificationsOutline,ChatboxOutline,GiftOutline,SettingsOutline,MenuOutline } from 'react-ionicons';




const nav = (props) => {
    let assignedClasses = [classes.logoMenuContainer];
    if (props.show){
        assignedClasses = [classes.logoMenuContainer, classes.hideLogoMenuContainer]
    }

    return (
        <nav className={classes.nav}>
            <div  className={assignedClasses.join(" ")}>
                <MenuOutline
                    color={'#2F4CDD'} 
                    title={"menuIcon"}
                    height="5rem"
                    width="5rem"
                    onClick={props.clicked}
                />
                <Logo />
            </div>
            

            <div className={classes.searchContainer}>
                <input className={classes.searchBox} type="search" name="search" placeholder="Search here" />
                <SearchOutline 
                    className={classes.searchIcon}
                    color={'#a4a4a4'} 
                    title={"Search Icon"}
                    height="3rem"
                    width="3rem"
                />
            </div>

            <div className={classes.menuContainer}>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Tools</a></li>
                    <li><a href="/">Help</a></li>
                </ul>
            </div>

            <div className={classes.toolBar}>
                <div className={[classes.iconContainer, classes.iconNot].join(" ")}>
                    <NotificationsOutline
                        color={'inherit'} 
                        title={"notificationIcon"}
                        height="2rem"
                        width="2rem"
                    />
                    <div className={[classes.dotCounter, classes.dotNot].join(" ")}>12</div>
                </div>
                <div className={[classes.iconContainer, classes.iconChat].join(" ")}>
                    <ChatboxOutline
                        color={'inherit'} 
                        title={"ChatboxOutline"}
                        height="2rem"
                        width="2rem"
                    />
                    <div className={[classes.dotCounter, classes.dotChat].join(" ")}>5</div>
                </div>
                <div className={[classes.iconContainer, classes.iconGift].join(" ")}>
                    <GiftOutline
                        color={'inherit'} 
                        title={"GiftOutline"}
                        height="2rem"
                        width="2rem"
                    />
                    <div className={[classes.dotCounter, classes.dotGift].join(" ")}>2</div>
                </div>
                <div className={[classes.iconContainer, classes.iconSet].join(" ")}>
                    <SettingsOutline
                        color={'inherit'} 
                        title={"SettingsOutline"}
                        height="2rem"
                        width="2rem"
                    />
                    <div className={[classes.dotCounter, classes.dotSet].join(" ")}>!</div>
                </div>
            </div>

            <div className={classes.profile}>
                <div className={classes.nameBar}>
                    <p>Hello, <span><strong> Emmanuel</strong></span></p>
                </div>
                <div className={classes.photoBar}>

                </div>
            </div>
        </nav>
    );
};

export default nav;