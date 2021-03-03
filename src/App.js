import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import CartComponent from './components/cartComponent';
import { DataBaseProvider } from './context/dataBaseContext';




const App = () => {
  return (
    <>
    <DataBaseProvider>
    <CartProvider>
    <BrowserRouter>
        <NavbarComponent />
    <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={ItemListContainer}/>
              <Route path='/category/:categoryId' component={ItemListContainer}/>
              <Route path='/item/:id' component={ItemDetailContainer}/>
              <Route path='/cart' component={CartComponent}/>
            </Switch>
    </div>
    </BrowserRouter>
    </CartProvider>
    </DataBaseProvider>
    </>
  );
}

export default App;
