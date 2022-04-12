import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { db } from "../Firebase";
import { context } from "./CartContext"

const Cart = () => {
    const contextResponse = useContext(context)
    const itemsOnCart = contextResponse?.cartContent
    const totalItems = contextResponse?.totalAmountOfItems
    
    const {removeItem} = useContext(context)
    const handleClick = () => {
        const data = {
            buyer: {
                firstName: '',
                phoneNumber: '',
                email: '',
            },
            items: itemsOnCart,
            date: serverTimestamp(),
            totalItems: totalItems,
        }
        const orderCollection = collection(db, "order")
        const itemsOrder = addDoc(orderCollection, data)
    }
    
    console.log(itemsOnCart)
    

    return (
        <>
            <h5 className="mx-5">Cart Items</h5>
            {itemsOnCart ?
                itemsOnCart.map(item => (
                    <div key={item.product[0].id}>
                        <h2> {item.product[0].itemName} </h2>
                        <p> {item.product[0].description} </p>
                        <p> $ {item.product[0].price} - {item.product[0].totalAmount} unidades</p>
                        <p> Total: $ {item.product[0].price * item.product[0].totalAmount} </p>
                        <button onClick={()=> removeItem(item.product[0].id)}>Delete Items</button>
                    </div>
                ))
                :   <div>
                        <p> No se han agregado productos al carrito</p>
                        <Link to={`/cart`} onClick={handleClick}>
                            <Button variant="primary mx-2 mt-2 text-black">
                            Comprar
                            </Button>
                        </Link>
                    </div>
                }
        </>
    )
}

export default Cart