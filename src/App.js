import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import CartComponent from './components/cartComponent';
import CheckoutComponent from './components/checkout';
import { DataBaseProvider } from './context/dataBaseContext';
import { FiltersProvider } from './context/filters';
import { CheckoutProvider } from './context/checkoutContext';
import FooterComponent from './components/footer';
import ContactComponent from './components/contact';




const App = () => {
  return (
    <>
    <DataBaseProvider>
    <FiltersProvider>
    <CheckoutProvider>
    <CartProvider>
    <BrowserRouter>
        <NavbarComponent />
    <div className="container-fluid">
            <Switch>
              <Route exact path='/react-assignments/' component={ItemListContainer}/>
              <Route path='/category/:categoryId' component={ItemListContainer}/>
              <Route path='/item/:id' component={ItemDetailContainer}/>
              <Route path='/cart' component={CartComponent}/>
              <Route path='/contact' component={ContactComponent}/>
              <Route path='/checkout' component={CheckoutComponent}/>
            </Switch>
    </div>
    </BrowserRouter>
    <FooterComponent/>
    </CartProvider>
    </CheckoutProvider>
    </FiltersProvider>
    </DataBaseProvider>
    </>
  );
}

export default App;
