import {
  NavDropdown,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Container,
} from "react-bootstrap";

function Categories() {
  return (
    <div className="Categories">
      <section id="categories" className="border border-2 mt-3">
        <Container fluid className="d-flex justify-content-center">
          <Row>
            <Col md="auto">
              <ButtonToolbar aria-label="Toolbar with button groups" md="auto">
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">
                    Super Price/Super Offer
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Imported Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Delivery Today</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Offers</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Top Sold</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Other Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success">Gift Ideas</Button>
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