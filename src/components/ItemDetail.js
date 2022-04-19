import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const ItemDetail = (prop) => {
    return (
        <div className="m-5">
            <h2> Producto: {prop.product[0].itemName}</h2>
            <img src={prop.product[0].itemImageUrl} alt="product-img" className="card-img m-3"/>
            <p> Detalles del producto: {prop.product[0].details} </p>
            <p> Precio: ${prop.product[0].price} </p>
            <p> Stock disponible: {prop.product[0].stock} </p>
            <NavLink to={`/category/${prop.product[0].categoryId}`}>
                <Button variant="primary text-black">
                    Ver otros productos de esta categoria
                </Button>
            </NavLink>
        </div>
    )
}

export default ItemDetail