import * as React from 'react';
import ProductList from "../../mocks/products"
import ItemListComponent from '../../components/itemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {
  const {categoryId} = useParams()
  const [product, setProduct] = React.useState([]);
  
  
  React.useEffect(()=>{
  const myPromise = new Promise((resolve,reject) =>{
      resolve(()=>{
        let filter = ProductList.filter(p => p.category === categoryId)
        if(categoryId === undefined){
          return ProductList
        }else{return filter}     
      });
    });
    myPromise.then((result) =>{
      setProduct(result);
    });

  },[categoryId]);
  
  return (
    <>
         
      <div className="ml-3 mt-3">
      <ItemListComponent product={product}/>
      </div>



    </>
  );
}

export default ItemListContainer;
