import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount"

// const [loading, setLoading] = useState(true)

const product =
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

const productPromise = new Promise((res)=>
    setTimeout(()=>{
        res(product)
        // setLoading(false)
    }, 3000)
) 
    

const ItemDetailContainer = (prop) => {
    
    const [product, setProduct] = useState([])
    const [itemsOnCart, setItemsOnCart] = useState(false);

    const getProduct = () => {
        return productPromise
    }

    const onAdd = (counter) => {
        console.log(counter)
        setItemsOnCart(true)
    }

    useEffect(()=>{
        getProduct()
        .then((productData)=>
            setProduct(productData))
            // setLoading(false)
        .catch((error)=> console.log(error))
    })

    return (
        <>
            <div className="m-5">
                <ItemDetail product={product} />
                <div>
                    {itemsOnCart
                        ?   <NavLink to={`/cart`}>
                                <Button variant="primary mx-2 mt-2 d-block w-100 text-black">
                                   Ir al carrito de compras
                                </Button>
                            </NavLink>
                        :   <ItemCount startingPoint={product.startingPoint} stock={product.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer