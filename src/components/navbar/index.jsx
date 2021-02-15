import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import CartWidgetComponent from '../cartWidget';
import {LinkContainer} from 'react-router-bootstrap';


const NavbarComponent = () => {
  

  return (
    <>
 <Navbar bg="light">

    <LinkContainer to={`/`}><Navbar.Brand>All You Need</Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="p-3 ">
    <Nav className="mr-auto">
    <LinkContainer to={`/`}><Nav.Link>Home</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'pens'}`}><Nav.Link>Lapiceras</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'planners'}`}><Nav.Link>Planners</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'clocks'}`}><Nav.Link>Relojes</Nav.Link></LinkContainer>
    <Nav.Link href="#link">Contacto</Nav.Link>
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
