import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import { db } from "../Firebase";
import { context } from "./CartContext"

const Cart = () => {
    const contextResponse = useContext(context)
    const itemsOnCart = contextResponse?.cartItems
    const totalItems = contextResponse?.totalAmountOfItems

    const {removeItem} = useContext(context)
    const handleClick = () => {
        const order = {
            buyer: {},
            items: {},
            date: serverTimestamp(),
            total: total,
        }
    }
    const orderCollection = collection(db, "oder")
    const itemsOrder = addDoc(orderCollection, order)

    console.log(itemsOrder)

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
                        <button onClick={()=> removeItem(item.id)}>Delete Items</button>
                    </div>
                ))
                :   <div>
                        <p> No se han agregado productos al carrito</p>
                        <Link to={`/cart`} onClick={handleClick}>
                            <Button variant="primary mx-2 mt-2 text-black">
                            Ir al carrito de compras
                            </Button>
                        </Link>
                    </div>
                }
        </>
    )
}

export default Cart