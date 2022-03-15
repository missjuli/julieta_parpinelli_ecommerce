import { NavLink } from "react-router-dom"

const NavbarItem = (props) => {
    console.log(props)
    return (
        <>
            <NavLink to={"/category/" + props.category.id}> {props.category.name}</NavLink>
        </>
    )
}

export default NavbarItem