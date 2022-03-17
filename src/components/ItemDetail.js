import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const ItemDetail = (prop) => {
    return (
        <div className="m-5">
            <h2> Producto: {prop.product.itemName}</h2>
            <img src={prop.product.itemImageUrl} alt="-"/>
            <p> Detalles del producto: {prop.product.details} </p>
            <p> Precio: ${prop.product.price} </p>
            <p> Stock disponible: ${prop.product.stock} </p>
            <NavLink to={`/category/${prop.product.categoryId}`}>
                <Button variant="primary text-black">
                    Ver otros productos de esta categoria
                </Button>
            </NavLink>
        </div>
    )
}

export default ItemDetail