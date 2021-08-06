import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Container,
  Dropdown,
  DropdownButton
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
                  <Button variant="outline-success" href="/produtcs">
                    Super Price/Super Offer
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Imported Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Delivery Today</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Offers</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Top Sold</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Other Products</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="outline-success" href="/produtcs">Gift Ideas</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2" >
                  <DropdownButton title="Language/Currency" variant="outline-success" >
                    <Dropdown.Item>TR-TL</Dropdown.Item>
                    <Dropdown.Item>EN-TL</Dropdown.Item>
                    <Dropdown.Item>EN-USD</Dropdown.Item>
                  </DropdownButton>
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
