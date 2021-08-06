import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Container,
  Tabs,
  Tab
} from "react-bootstrap";
import Header from "../Components/Header";

function SignIn() {
  return (
    <div className="SignIn">
      <Header />
      <Container>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab eventKey="Home" title="Giriş">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-Posta</Form.Label>
                    <Form.Control type="email" placeholder="E-Posta" />
                    <Form.Text className="text-muted">
                      Bilgileriniz Kimse İle Paylaşılmayacaktır.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control type="password" placeholder="Şifre" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Beni Hatırla" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mr-2">
                    Giriş
                  </Button>
                  <Button type="reset" value="Reset">
                    Sıfırla
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="profile" title="kayıt Ol">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>E-Posta</Form.Label>
                      <Form.Control type="email" placeholder="E-Posta" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Şifre</Form.Label>
                      <Form.Control type="password" placeholder="Şifre" />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Adres</Form.Label>
                    <Form.Control placeholder="Atatürk Mah." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Adres 2</Form.Label>
                    <Form.Control placeholder="Apartman, Daire, Kat" />
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>İlçe</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formGridState">
                      <Form.Label>İl</Form.Label>
                      <Form.Control as="select" custom>
                        <option>İstanbul</option>
                        <option>Ankara</option>
                        <option>İzmir</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Posta Kodu</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Beni Hatırla" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Kayıt Ol
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;