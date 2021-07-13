import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header id="header">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </header>
      <section id="categories">
        <div id="categorie" className="container">
          <div className="dropdown m-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <ul>
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group me-2">
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Offers</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Top Sold</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Other Products</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Gift Ideas</a></button>
            </div>
          </div>
          <li><a href="">Language/Currency</a></li>
        </ul>
      </section>
      <section id="subcategories">
        <div>Sub Categories</div>
        <div id="carouselExampleIntervar" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img src="" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>          
        </div>
      </section>
      <section id="clearence">
        <div>Clearence</div>
        <div>Recenlty Viewed</div>
        <div>Buy Again</div>
        <div>Best Seller</div>
      </section>
      <footer id="footer">
        Telif Hakkları Korunmaktadır.
      </footer>
    </div>
  );
} 

export default App;