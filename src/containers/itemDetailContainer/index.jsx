import * as React from 'react';
import ItemDetailComponent from '../../components/itemDetail';
import ProductList from "../../mocks/products"

const ItemDetailContainer = () => {
  const [item, setItem] = React.useState([]);
  
  React.useEffect(()=>{
      const itemDetailPromise = new Promise((resolve,reject) =>{
      setTimeout(()=>{
          resolve(ProductList)
      },2000)
      });
      itemDetailPromise.then((result) =>{
      setItem(result);
    }, []);
 })

  return (
    <>
    {item.filter(item => item.id === 1).map((item)=>{
         return <li className="list-unstyled p-3" key={item.id}>
                        <ItemDetailComponent item={item}/>
                        </li>;
                })}
    </>
  );
}

export default ItemDetailContainer;