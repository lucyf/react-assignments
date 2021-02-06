import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountComponent from '../../components/itemCount';
import ProductList from "../../mocks/products"
import ItemListComponent from '../../components/itemList';


const ItemListContainer = ({greeting}) => {
  const [product, setProduct] = React.useState([]);
  
  React.useEffect(()=>{
    const myPromise = new Promise((resolve,reject) =>{
      setTimeout(() => resolve(ProductList), 2000);
    });
    myPromise.then((result) =>{
      setProduct(result);
    }, []);
  })

  return (
    <>
      <div className="ml-3 mt-3">
      <h3>{greeting}</h3>
      <ItemListComponent product={product}/>
      </div>
      <ItemCountComponent/>
    </>
  );
}

export default ItemListContainer;
