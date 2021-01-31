import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';


const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer greeting={'Bienvenidos a mi primer app'}/>
    </>
  );
}

export default App;
