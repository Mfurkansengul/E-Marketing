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
                  <Button variant="success" href="/products">
                    Süper Fiyat, Süper Teklif
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Yurt Dışından</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Bugün Teslimat</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Kampanyalar</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Çok Satanlar</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Diğer Ürünler</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="success" href="/products">Hediye Rehberi</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2" >
                  <DropdownButton title="Language/Currency" variant="success" >
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
