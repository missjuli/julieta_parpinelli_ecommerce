import NavbarItem from "./NavBarItem"
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    const links = [
        {name:"Link1", href: "#"},
        {name:"Link2", href: "#"},
        {name:"Link3", href: "#"}
    ]

    return(
        <div className="header">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        Jazaar
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="navbar">
                            {links.map((link, index) => (
                                <NavbarItem key={index} link={link} className="navbar-links"/>
                            ))}
                            <CartWidget startingPoint={0}/>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar