import { useContext, useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount"
import { context } from "./CartContext";
import { db } from "../Firebase"
import { getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = (prop) => {
    const [product, setProduct] = useState([])
    const [itemsOnCart, setItemsOnCart] = useState(false);
    const [loading, setLoading] = useState(true)
    const {addItem} = useContext(context)

useEffect(()=>{
    const productCollection = collection(db, "products")
    const document = getDoc(productCollection)
    
    document
    .then((productData)=>{
        setProduct(productData)
        console.log(productData)
        // if(product.startingPoint || product.stock){
        //     setLoading(false)
        // }
    })
    .catch(()=> console.log('error'))
    })

    const onAdd = (counter) => {
        addItem(product, counter)
        setItemsOnCart(true)
    }

    return (
        <>
        {loading
        ? <p> Cargando. Aguarde por favor.</p>
        : <div className="m-5">
                <ItemDetail product={product} />
                <div>
                    {itemsOnCart && !loading
                        ?   <NavLink to={`/cart`}>
                                <Button variant="primary mx-2 mt-2 text-black">
                                Ir al carrito de compras
                                </Button>
                            </NavLink>
                        :   <ItemCount id={product.id} startingPoint={product.startingPoint} stock={product.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default ItemDetailContainer