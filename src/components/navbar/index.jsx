import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidgetComponent from '../cartWidget'

const NavbarComponent = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Entre Azaleas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Eventos</a>
              <a className="nav-link" href="#">Arreglos</a>
              <a className="nav-link" href="#">Contacto</a>
            </div>
          </div>
          <div className=" ml-auto ">
              <CartWidgetComponent/>
          </div>
      </div>
    </nav>
    </>
  );
}

export default NavbarComponent;
