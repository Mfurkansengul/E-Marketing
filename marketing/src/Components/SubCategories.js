import { Carousel, Row, Col } from "react-bootstrap";
import AllCategories from "./AllCategories";

function SubCategories() {
  return (
    <div className="SubCategories">
      <section id="subcategories" className="mt-2 ml-3">
        <Row>
          <Col md={2} className="border border-2 border-primary p-3">
            <AllCategories />
          </Col>
          <Col md={10}>
            <Carousel className="ml-5 col-md-11">
              <Carousel.Item interval={1000}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default SubCategories;