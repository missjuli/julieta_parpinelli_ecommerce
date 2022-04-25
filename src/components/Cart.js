import { clear } from "@testing-library/user-event/dist/clear";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { db } from "../Firebase";
import CartContext, { context } from "./CartContext"

const Cart = () => {
    const contextResponse = useContext(CartContext)
    const itemsOnCart = contextResponse?.cartItems
    const navigate = useNavigate()

    const handleClick = () => {
        const data = {
            buyer: {
                firstName: 'Nombre',
                phoneNumber: '34155555',
                email: 'email@gmail.com',
            },
            items: cartContent,
            date: serverTimestamp(),
        }
       
        addDoc(collection(db, "order"), data)
        .then((res)=>{
            alert(`¡Muchas gracias por tu compra! Tu número de órden es ${res.id}`)
            clear()
            navigate("/")
        })
        .catch((error)=>alert(error))
    }

    const {cartContent, removeItem, clear} = useContext(context)

    return (
        <>
            <h5 className="mx-5">Cart Items</h5>
            {cartContent.length > 0 ?
                cartContent.map(item => (
                    <div key={item.product.id} className="cart-item">
                        <h2> {item.product.itemName} </h2>
                        <p> {item.product.description} </p>
                        <p> $ {item.product.price} - {item.amount} unidad(es)</p>
                        <p> Total: $ {item.product.price * item.amount} </p>
                        <Button onClick={()=> removeItem(item.product.id)}>Quitar del carrito</Button>
                    </div>
                ))
                :   <div className="cart-item">
                        <p> No se han agregado productos al carrito</p>
                        <Link to={`/`}>
                            <Button variant="primary mx-2 mt-2 text-black">
                                Ver productos
                            </Button>
                        </Link>
                    </div>
                }
                <div>
                    <Button variant="btn btn-primary d-flex m-auto p-4 mt-2 text-black" onClick={handleClick}>
                        Efectuar mi compra
                    </Button>
                </div>
        </>
    )
}

export default Cart