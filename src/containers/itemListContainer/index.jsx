import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountComponent from '../../components/itemCount';

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div className="ml-3 mt-3">
      <h3>{greeting}</h3>
      </div>
      <ItemCountComponent/>
    </>
  );
}

export default ItemListContainer;
