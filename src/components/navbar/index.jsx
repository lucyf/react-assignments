import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import CartWidgetComponent from '../cartWidget';
import {LinkContainer} from 'react-router-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from 'react';
import { filtersContext } from '../../context/filters';


const NavbarComponent = () => {
    const {catchInput, searchValue, submitResult} = useContext(filtersContext)


  return (
    <>
 <Navbar bg="light">

    <LinkContainer to={`/`}><Navbar.Brand className="m-0 p-0 "><img src="/img/all-you-need.svg" width="150px" alt=""/></Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="p-3 ">
    <Nav className="mr-auto">
    <LinkContainer to={`/`}><Nav.Link>Home</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'pens'}`}><Nav.Link>Lapiceras</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'notebooks'}`}><Nav.Link>Planners</Nav.Link></LinkContainer>
    <LinkContainer to={`/category/${'clocks'}`}><Nav.Link>Relojes</Nav.Link></LinkContainer>
    <Nav.Link href="#link">Contacto</Nav.Link>
      <Nav.Link href="#link">FAQ</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Búsqueda" value={searchValue} onChangeCapture={(e)=>{catchInput(e.target.value)}} className="mr-sm-2" />
      <Button className="p-1" variant="outline-dark" ><SearchIcon/></Button>
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
