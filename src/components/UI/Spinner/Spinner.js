import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.Skchase}>
  <div className={classes.Skchasedot}></div>
  <div className={classes.Skchasedot}></div>
  <div className={classes.Skchasedot}></div>
  <div className={classes.Skchasedot}></div>
  <div className={classes.Skchasedot}></div>
  <div className={classes.Skchasedot}></div>
</div>
);

export default spinner;