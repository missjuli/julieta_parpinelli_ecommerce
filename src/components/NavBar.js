import NavbarItem from "./NavBarItem"
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    const categories = [
        {name:"Cartucheras", categoryId: "1"},
        {name:"Telas y diseños disponibles", categoryId: "2"},
        {name:"Gift Boxes", categoryId: "3"}
    ]

    return(
        <div className="header">
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="/" className="d-flex">
                            <Logo />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="navbar">
                            {categories.map((category, index) => (
                                <NavbarItem key={index} category={category} className="navbar-links"/>
                            ))}
                        </div>
                        <div className="d-flex mt-4">
                            <CartWidget startingPoint={0}/>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
