import 'bootstrap/dist/css/bootstrap.min.css';



const CartWidgetComponent = () => {
  return (
    <>
    <div>
    <a classNameNameName="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="cartDropdown">
        <img src="/img/carrito.png" width="40%" alt=""/>
    </a>
    </div>
    <div className="collapse" id="cartDropdown">
        <div className="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
    </div>
    </>
    
  );
}

export default CartWidgetComponent;
