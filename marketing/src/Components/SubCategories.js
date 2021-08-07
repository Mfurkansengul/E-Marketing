import { Carousel, Row, Col } from "react-bootstrap";
import AllCategories from "./AllCategories";

function SubCategories() {
  return (
    <div className="SubCategories">
      <section id="subcategories" className="mt-2 ml-3">
        <Row>
          <Col md={2} className="border border-2 border-success p-3">
            <AllCategories />
          </Col>
          <Col md={10} className="border border 4">
            <Carousel className="ml-5 col-md-11">
              <Carousel.Item interval={2000}>
                <img
                  style={{ height: "455px" }}
                  className="d-block w-100"
                  src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2162_20210709115858.png/format:webp"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>Maceraya Hazırlan</h3>
                  <p style={{ color: "black" }}>Büyük İndirimi Kaçırma</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  style={{ height: "455px" }}
                  className="d-block w-100"
                  src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2084_20210609091624.png/format:webp"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>
                    Seçilen Kozmeik Ve Bakım Ürünlerinde
                  </h3>
                  <p style={{ color: "black" }}>Net %40 İndirim</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  style={{ height: "455px" }}
                  className="d-block w-100"
                  src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2082_20210804091130.png/format:webp"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>Hijyen Ürünlerinde</h3>
                  <p style={{ color: "black" }}>%40'a Varan İndirimler</p>
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
