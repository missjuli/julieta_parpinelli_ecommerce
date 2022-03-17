import { NavLink } from "react-router-dom"

const NavbarItem = (props) => {
    return (
        <>
            <NavLink to={`/category/${props.category.categoryId}`}> {props.category.name}</NavLink>
        </>
    )
}

export default NavbarItem