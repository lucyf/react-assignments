import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="container-fluid">
        <NavbarComponent />
            <Switch>
              <Route exact path='/' component={ItemListContainer}/>
              <Route exact path='/item/:id' component={ItemDetailContainer}/>
            </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
