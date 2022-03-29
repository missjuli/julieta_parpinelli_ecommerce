import { useContext } from "react"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import CartContext from "./CartContext"


const Cart = () => {
    const contextResponse = useContext(CartContext)
    const itemsOnCart = contextResponse?.cartItems
    const totalItems = contextResponse?.totalAmountOfItems

    return (
        <>
            <h5 className="mx-5">Cart Items</h5>
            {itemsOnCart ?
                itemsOnCart.map(item => (
                    <div key={item.id}>
                        <h2> {item.itemName} </h2>
                        <p> {item.description} </p>
                        <p> $ {item.price} - {item.totalAmount} unidades</p>
                        <p> Total: $ {item.price * item.totalAmount} </p>
                        <button>Delete Items</button>
                    </div>
                ))
                :   <div>
                        <p> No se han agregado productos al carrito</p>
                        <NavLink to={`/`}>
                            <Button variant="primary mx-2 mt-2 text-black">
                            Ir al carrito de compras
                            </Button>
                        </NavLink>
                    </div>
                }
        </>
    )
}

export default Cart