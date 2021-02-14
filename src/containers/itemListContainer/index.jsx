import * as React from 'react';
import ProductList from "../../mocks/products"
import ItemListComponent from '../../components/itemList';


const ItemListContainer = () => {
  const [product, setProduct] = React.useState([]);
  
  React.useEffect(()=>{
    const myPromise = new Promise((resolve,reject) =>{
      resolve(ProductList);
    });
    myPromise.then((result) =>{
      setProduct(result);
    }, []);
  })

  return (
    <>
      <div className="ml-3 mt-3">

      <ItemListComponent product={product}/>
      </div>
    </>
  );
}

export default ItemListContainer;
