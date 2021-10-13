import React from 'react';
import { NavDropdown, Navbar, Form, FormControl, Button, Nav, Container} from 'react-bootstrap';



const NavbarComponent = () => {
  return (
    <Navbar className="navbar" bg="primary" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#">Kasir-App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="DropDown" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mx-4"
          aria-label="Search"
        />
        <Button variant="outline-light ">Search</Button>
      </Form>
    </Navbar.Collapse> 
    </Container>
    </Navbar>

   
    
  );
}

export default NavbarComponent;
