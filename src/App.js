import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';


const App = () => {
  return (
    <>
    <div className="container-fluid">
    <NavbarComponent />
    <br></br>
    <ItemListContainer greeting={'Bienvenidos a mi primer app'}/>
    <ItemDetailContainer/>
    </div>
    </>
  );
}

export default App;
