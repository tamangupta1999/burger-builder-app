import React from 'react';
import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from './../../Burger/UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
    let attanchedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
     attanchedClasses = [classes.SideDrawer, classes.Open];

    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
         <div className={attanchedClasses.join(' ')}>
            <div  className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}


export default sideDrawer;