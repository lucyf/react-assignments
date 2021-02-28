import React, { useContext } from 'react';
import clsx from 'clsx';
import 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CartDrawerComponent from '../cartDrawer';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cartContext } from '../../context/cartContext';


const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const CartWidgetComponent = () => {
  const {cart} = useContext(cartContext)
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
  
const disabled = cart.length === 0;

  return (
    <div>
      {['right'].map((anchor) => (

        <React.Fragment key={anchor}>
          <div>
          <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon onClick={disabled ? toggleDrawer(anchor, false) : toggleDrawer(anchor, true) } className="p-0 m-1" />
              </StyledBadge>
          </IconButton>
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




