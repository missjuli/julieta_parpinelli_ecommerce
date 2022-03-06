const NavbarItem = (props) => {
    return (
        <>
            <a href={props.link.href}> {props.link.name}</a>
        </>
    )
}

export default NavbarItem