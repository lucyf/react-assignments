import React from 'react';
import clsx from 'clsx';
import 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';  
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CartDrawerComponent from '../cartDrawer';


const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});


const useStylesBadge = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const CartWidgetComponent = () => {
  const badge = useStylesBadge();

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
        <CartDrawerComponent/>     
      </List>
      
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (

        <React.Fragment key={anchor}>
          <div className={badge.root}>
          <Badge  badgeContent={4} color="secondary">
           <Button onClick={toggleDrawer(anchor, true)}><AddShoppingCartIcon/></Button>
          </Badge>
          </div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default CartWidgetComponent;




