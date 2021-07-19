import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Carousel, Breadcrumb, CardGroup, Card, CardImg,} from 'react-bootstrap';

function Categories() {
    return (
        <div className="Categories">
            <section id="categories">
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2">
                        <NavDropdown title="All Categories" id="navbarScrollingDropdown">Tüm Kategoriler</NavDropdown>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <Button>Offers</Button>
                    </ButtonGroup >
                    <ButtonGroup className="mr-2">
                        <Button>Top Sold</Button>
                    </ButtonGroup >
                    <ButtonGroup className="mr-2">
                        <Button>Other Products</Button>
                    </ButtonGroup >
                    <ButtonGroup className="mr-2">
                        <Button>Gift Ideas</Button>
                    </ButtonGroup >
                    <ButtonGroup className="mr-2">
                        <NavDropdown title="Language/Currency" id="navbarSrollingDropdown"></NavDropdown>
                    </ButtonGroup >
                </ButtonToolbar>
            </section>
        </div>
    )
    
}

export default Categories;