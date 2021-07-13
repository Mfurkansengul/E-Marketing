import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Carousel, Breadcrumb, Pagination} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header id="header">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
          <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
      <Nav.Link href="#action1">Sign In</Nav.Link>
      <NavDropdown title="Notification" id="navbarScrollingDropdown">
      </NavDropdown>
      <Nav.Link href="#action2">Cart</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
      </header>
      <section id="categories">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2">
          <NavDropdown title="All Categories" id="navbarScrollingDropdown">Tüm Kategoriler</NavDropdown>
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button>Offers</Button>
        </ButtonGroup >
        <ButtonGroup className="mr-2">
          <Button>Top Sold</Button>
        </ButtonGroup >
        <ButtonGroup className="mr-2">
          <Button>Other Products</Button>
        </ButtonGroup >
        <ButtonGroup className="mr-2">
          <Button>Gift Ideas</Button>
        </ButtonGroup >
        <ButtonGroup className="mr-2">
          <NavDropdown title="Language/Currency" id="navbarSrollingDropdown"></NavDropdown>
        </ButtonGroup >
        </ButtonToolbar>
      </section>
      <section id="subcategories">
      <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` A ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` B ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` C ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` D ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        </DropdownButton>
    ))}
  </div>
  <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` E ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="mb-2">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` F ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        </DropdownButton>
    ))}
  </div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images\IMG_0117.JPG"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </section>
      <section id="clearence">
        <div>Clearence</div>
          
        <div>Buy Again</div>
        <div>Best Seller</div>
      </section>
      <footer id="footer">
      <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
        Telif Hakkları Korunmaktadır.
      </footer>
    </div>
  );
} 

export default App;