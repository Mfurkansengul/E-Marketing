import { Row, Col, Card, CardImg} from 'react-bootstrap';
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import Filters from '../Components/Filters'

function Products() {
  return (
    <div className="Products">
      <Header />
      <Categories />
      <Row className="mt-5">
        <Col md={10} className="ml-4">
          <Row xs={1} md={6} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>This is a loger card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>This is a loger card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>This is a loger card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>This is a loger card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Filters />
        </Col>
      </Row>
    </div>
  );
} 

export default Products;