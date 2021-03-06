import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailComponent from '../../components/itemDetail';
import { dataBaseContex } from '../../context/dataBaseContext';

const ItemDetailContainer = () => {
  const {id} = useParams()
  const {itemList} = useContext(dataBaseContex)
  const [item, setItem] = useState([]);
  
  useEffect(()=>{
      setItem(itemList);
    
 }, [id]);

  return (
    <>
    {item.filter(item => item.id.toString() === id).map((item)=>{
         return <li className="list-unstyled p-3 justify-content-center" key={item.id}>
                        <ItemDetailComponent item={item}/>
                        </li>;
                })}
    </>
  );
}

export default ItemDetailContainer;