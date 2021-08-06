import {
  Carousel,
  CardGroup,
  Card,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function Clearence() {
  return (
    <div className="Clearence" className="mt-4">
      <section id="clearence">
        <Container fluid>
          <Row>
            <Col md={3}>
              <div id="clearence_section">
                <Button variant="success" className="w-100">
                  İndirim
                </Button>
                <CardGroup>
                  <Carousel>
                    <Carousel.Item>
                      <Card>
                        <Card.Img
                          style={{ height: "364px" }}
                          src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Card>
                        <Card.Img
                          style={{ height: "364px" }}
                          src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Card>
                        <Card.Img
                          style={{ height: "364px" }}
                          src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                  </Carousel>
                </CardGroup>
              </div>
            </Col>
            <Col md={9}>
              <Row>
                <Col md={6}>
                  <div id="recently_viewed">
                    <Button variant="success" className="w-100">
                      Son Bakılanlar
                    </Button>
                    <Carousel>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Col>
                <Col md={6}>
                  <div id="buy_again">
                    <Button variant="success" className="w-100">
                      Yeniden Satın Al
                    </Button>
                    <Carousel>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                      <Carousel.Item>
                        <CardGroup>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Col>
              </Row>
              <Row>
                <div id="best_seller" className="m-3 w-100">
                  <Button variant="success" className="w-100">
                    En Çok Satanlar
                  </Button>
                  <Carousel>
                    <Carousel.Item>
                      <CardGroup>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                      </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CardGroup>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                      </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CardGroup>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                          </Card.Body>
                        </Card>
                      </CardGroup>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Clearence;
