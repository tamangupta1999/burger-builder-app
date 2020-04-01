import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' >Burger Builder</NavigationItem>
            {props.isAutheticated ? <NavigationItem link='/orders'>My Order</NavigationItem> : null}
            {!props.isAutheticated ? 
            <NavigationItem link='/auth'>Authenticate</NavigationItem> : 
            <NavigationItem link='/logout'>Logout</NavigationItem>
            }
        </ul>
)
export default navigationItems;