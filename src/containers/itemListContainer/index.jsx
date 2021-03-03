import * as React from 'react';
import ProductList from "../../mocks/products"
import ItemListComponent from '../../components/itemList';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { dataBaseContex } from '../../context/dataBaseContext';



const ItemListContainer = () => {
  const {categoryId} = useParams()
  const {itemList} = useContext(dataBaseContex)
  const [product, setProduct] = React.useState([]);

  console.log(itemList)
  React.useEffect(()=>{
  const myPromise = new Promise((resolve,reject) =>{
      resolve(()=>{
        let filter = itemList.filter(p => p.categoryId === categoryId)
        if(categoryId === undefined){
          return itemList
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
