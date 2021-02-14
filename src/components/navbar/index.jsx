import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidgetComponent from '../cartWidget';
import { NavLink, Link} from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <>
 <Navbar bg="light">

   <NavLink to={`/`}><Navbar.Brand>All You Need</Navbar.Brand></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="p-3 ">
    <Nav className="mr-auto">
    <NavLink to={`/`}><Nav.Link>Home</Nav.Link></NavLink>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Planners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Lapiceras</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Relojes</NavDropdown.Item>
      </NavDropdown>
      <NavLink to={`/`}><Nav.Link href="#link">Contacto</Nav.Link></NavLink>
      <Nav.Link href="#link">FAQ</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
    <div className="">
              <CartWidgetComponent/>
          </div>
 </Navbar>
    </>
  );
}

export default NavbarComponent;
