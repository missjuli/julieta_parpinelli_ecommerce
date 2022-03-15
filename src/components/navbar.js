import NavbarItem from "./NavBarItem"
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
    const categories = [
        {name:"Products", id: "1"},
        {name:"Fabrics & Themes", id: "2"},
        {name:"Packaging", id: "3"}
    ]

    return(
        <div className="header">
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex">
                        {/* <Link to="/"> */}
                            <Logo />
                        {/* </Link> */}
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