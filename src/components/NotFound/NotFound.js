import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: { 
    color: 'white',
    padding: '200px 0', 
    height: '100vh',
    textAlign: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/450px-Surprised_Pikachu_HD.jpg)'
  },
  buttonLabel: {
    textDecoration: 'none',
    color: 'white'
  }
}));
export const NotFound = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Page Not Found</h1>
      <p>Ooops! You are lost or maybe no pokemon matched your search</p>
      <Link className={classes.buttonLabel} to="/">
        <Button variant="contained" color="primary">
          Back Home
        </Button>
      </Link>
    </div>
  );
};
