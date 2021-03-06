import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';
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
         <div className={attanchedClasses.join(' ')} onClick={props.closed}>
            <div  className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems isAutheticated={props.isAuth} />
            </nav>
        </div>
        </Aux>
    );
}


export default sideDrawer;