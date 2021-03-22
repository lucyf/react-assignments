import * as React from 'react';
import ItemListComponent from '../../components/itemList';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { dataBaseContex } from '../../context/dataBaseContext';
import { filtersContext } from '../../context/filters';
import Dropdown from 'react-bootstrap/Dropdown';
import CarouselComponent from '../../components/carousel';



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

  const cheaperPrice =()=> {
    setProduct([...product.sort((a,b)=> (a.price > b.price ? 1: -1))]);
  }


  const higherPrice = () => {
    setProduct([...product.sort((a,b)=> (a.price < b.price ? 1: -1))]);
  }

  const condition = categoryId !== "pens" && categoryId !== "notebooks" && categoryId !== "clocks"
  
  return (
    <>
      <div style={{display: condition ? "block": "none"}} className="mt-3 mb-3">
        <CarouselComponent/>
      </div>
      <div className=" row ">
        <Dropdown className=" d-flex ml-auto mr-3 row juttify-content-right">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Ordenar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={cheaperPrice}>Menor Precio</Dropdown.Item>
                <Dropdown.Item onClick={higherPrice}>Mayor Precio</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="ml-3 mt-3">
      <ItemListComponent product={product}/>
      </div>



    </>
  );
}

export default ItemListContainer;
