import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Carousel, Breadcrumb, CardGroup, Card, CardImg,} from 'react-bootstrap';

function Footer() {
    
    return (
        <div className="Footer">
            <footer id="footer">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Solution Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Communication</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Payment Methods</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Cancellation, Refund, Exchange</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">User Security</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Live support</Breadcrumb.Item>
                    <Breadcrumb.Item active>Telif Hakkları Korunmaktadır.</Breadcrumb.Item>
                </Breadcrumb>
                </footer>
        </div>

    )
}

export default Footer;