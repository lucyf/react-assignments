import * as React from 'react';
import ItemListComponent from '../../components/itemList';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { dataBaseContex } from '../../context/dataBaseContext';
import { filtersContext } from '../../context/filters';



const ItemListContainer = () => {
  const {categoryId} = useParams();
  const {itemList} = useContext(dataBaseContex);
  // const {searchValue} = useContext(filtersContext)
  const [product, setProduct] = React.useState([]);
  



  useEffect(()=>{
  const myPromise = new Promise((resolve,reject) =>{
      resolve(()=>{
        let filter = itemList.filter(p => p.categoryId === categoryId)
        // let filterSearch = itemList.filter(p => p.searchKey.includes(searchValue))
        if(categoryId === undefined){
          return itemList
        }else{return filter}     
      });
  });
  myPromise.then((result) =>{
      setProduct(result);
  });

  },[categoryId, itemList]);
  
  return (
    <>
         
      <div className="ml-3 mt-3">
      <ItemListComponent product={product}/>
      </div>



    </>
  );
}

export default ItemListContainer;
