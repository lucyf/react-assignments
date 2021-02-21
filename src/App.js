import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CartProvider } from './context/cartContext';


const App = () => {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
        <NavbarComponent />
    <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={ItemListContainer}/>
              <Route path='/category/:categoryId' component={ItemListContainer}/>
              <Route path='/item/:id' component={ItemDetailContainer}/>
            </Switch>
    </div>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
