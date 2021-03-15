import { useContext } from "react";
import { filtersContext } from "../../context/filters";
import ItemComponent from "../item";


const ItemListComponent = ({product}) =>{
    const {searchValue}= useContext(filtersContext)

    return(
        <>
        <div>
            <ul className="row justify-content-center">
                {product.filter((val)=>{
                    if(searchValue == ""){
                        return val
                    }else if(val.searchKey.includes(searchValue)){
                        return val
                    }
                }).map((items)=>{
                    return <li className="list-unstyled p-3" key={items.id}>
                        <ItemComponent item={items}/>
                        </li>;
                })}
            </ul>
        </div>
        </>
    )
}

export default ItemListComponent;