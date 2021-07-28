import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Carousel, Breadcrumb, CardGroup, Card, CardImg, Row, Col} from 'react-bootstrap';


function SubCategories() {
    
    return (

        <div className="SubCategories">
            <section id="subcategories" className="mt-2 ml-3">
                <Row>
                    <Col md={1}>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` A ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` B ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` C ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` D ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` E ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` F ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                    </Col>
                    <Col md={11}>
                        <Carousel className="ml-5 col-md-11">
                            <Carousel.Item interval={1000}>
                                <img style={{'height':"300px"}}
                                className="d-block w-100"
                                src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img style={{'height':"300px"}}
                                className="d-block w-100"
                                src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{'height':"300px"}}
                                className="d-block w-100"
                                src="https://s1.pearlcdn.com/TR/Upload/Community/7546b0053ad20181220122301057.png"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </section>
        </div>
    )

}

export default SubCategories;