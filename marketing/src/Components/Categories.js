import {
  NavDropdown,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Container,
  Dropdown,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Categories() {
  return (
    <div className="Categories">
      <section id="categories" className="mt-3">
        <Container fluid="sm">
          <Row>
            <Col md="auto">
              <ButtonToolbar aria-label="Toolbar with button groups" md="auto">
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">
                    Super Price/Super Offer
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Imported Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Delivery Today</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Offers</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Top Sold</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Other Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-primary">Gift Ideas</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <NavDropdown
                    title="Language/Currency"
                    id="navbarSrollingDropdown"
                  ></NavDropdown>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Categories;
