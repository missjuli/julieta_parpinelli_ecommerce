import { useContext } from "react"
import { context } from "./CartContext"

const Cart = (prop) => {
    const contextResponse = useContext(context)
    console.log(contextResponse)
    const itemsOnCart = contextResponse.cartItems
    const totalItems = contextResponse.totalAmountOfItems

    return (
        <>
            {/* <p> Carrito de compras en construcción </p>
            {itemsOnCart.map(item => (
                <div key={item.id}>
                    <h2> {item.itemName}</h2>
                </div>
            ))} */}
        </>
    )
}

export default Cart