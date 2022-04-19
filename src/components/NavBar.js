import { useContext } from "react"
import NavbarItem from "./NavBarItem"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { Container, Navbar, Nav } from 'react-bootstrap';
import { context } from "./CartContext"

const NavBar = () => {
    const {cartContent} = useContext(context)
    var itemCounter = 0
    var total = 0
    const cartTotalAmount = cartContent.map((item)=> item.amount + itemCounter)

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
                        <img src="../assets/jazaar.png" alt="logo" className="logo"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="navbar">
                            {categories.map((category, index) => (
                                <NavbarItem key={index} category={category} className="navbar-links"/>
                            ))}
                        </div>
                        <div className="d-flex mt-4">
                        <NavLink to={`/cart`} className="d-flex">
                            <CartWidget startingPoint={cartTotalAmount ? cartTotalAmount : 0}/>
                        </NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
