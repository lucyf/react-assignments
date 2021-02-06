import ItemComponent from "../item"

const ItemListComponent = ({product}) =>{
    return(
        <>
        <div>
            <ul className="row ">
                {product.map((product)=>{
                    return <li className="list-unstyled p-3" key={product.id}>
                        <ItemComponent item={product}/>
                        </li>;
                })}
            </ul>
        </div>
        </>
    )
}

export default ItemListComponent;