import { useContext, useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount"
import CartContext from "./CartContext";

const productOne =
    {
        id: 1,
        categoryId: 1,
        itemName: "Cartuchera Zipper",
        details:'Cartuchera simple con cierre (15x25)',
        price: 300,
        startingPoint: 0,
        stock: 5,
        itemImageUrl:'../assets/zipperbag.jpg',
    }

const ItemDetailContainer = (prop) => {
    const [product, setProduct] = useState([])
    const [itemsOnCart, setItemsOnCart] = useState(false);
    const [loading, setLoading] = useState(true)
    const {addItem} = useContext(CartContext)

useEffect(()=>{
    const productPromise = new Promise((res)=>{
        setTimeout(()=>{
                res(productOne)
            }, 2000)
    })
    productPromise
    .then((productData)=>{
        setProduct(productData)
        if(product.startingPoint || product.stock){
            setLoading(false)
        }
    })
    .catch(()=> console.log('error'))
    })

    const onAdd = (counter) => {
        setItemsOnCart(true)
    }

    return (
        <>
        {loading
        ? <p> Cargando. Aguarde por favor.</p>
        : <div className="m-5">
                <ItemDetail product={product} />
                <div>
                    {itemsOnCart
                        ?   <NavLink to={`/cart`}>
                                <Button variant="primary mx-2 mt-2 text-black">
                                Ir al carrito de compras
                                </Button>
                            </NavLink>
                        :   <ItemCount startingPoint={product.startingPoint} stock={product.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default ItemDetailContainer