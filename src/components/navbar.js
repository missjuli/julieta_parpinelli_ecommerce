import NavbarItem from "./NavBarItem"
import Logo from "./Logo"
import CarWidget from "./CarWidget"
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
                            {links.map((link) => (
                                <NavbarItem link={link} className="navbar-links"/>
                            ))}
                            <CarWidget />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            {/*  */}
        </div>
    )
}

export default NavBar