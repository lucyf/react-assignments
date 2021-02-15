import * as React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailComponent from '../../components/itemDetail';
import ProductList from "../../mocks/products"

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [item, setItem] = React.useState([]);
  
  React.useEffect(()=>{
      const itemDetailPromise = new Promise((resolve,reject) =>{
          resolve(ProductList)
      });
      itemDetailPromise.then((result) =>{
      setItem(result);
    }, [id]);
 })

  return (
    <>
    {item.filter(item => item.id.toString() === id).map((item)=>{
         return <li className="list-unstyled p-3" key={item.id}>
                        <ItemDetailComponent item={item}/>
                        </li>;
                })}
    </>
  );
}

export default ItemDetailContainer;