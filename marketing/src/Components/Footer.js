import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Carousel, Breadcrumb, CardGroup, Card, CardImg,} from 'react-bootstrap';

function Footer() {
    
    return (
        <div className="Footer">
            <footer id="footer">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Telif Hakkları Korunmaktadır.</Breadcrumb.Item>
                </Breadcrumb>
                </footer>
        </div>

    )
}

export default Footer;