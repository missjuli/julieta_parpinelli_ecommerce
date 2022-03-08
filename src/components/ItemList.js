import { useState } from "react"
import Item from "./Item"

const productsBaseList = [
    {
        id: 1,
        itemName: "Product 1",
        price: 300,
        startingPoint: 0,
        stock: 5
    }    
]

const productsFullList = [
    {
        id: 1,
        itemName: "Product 1",
        price: 300,
        startingPoint: 0,
        stock: 10
    },
    {
        id: 2,
        itemName: "Product 2",
        price: 400,
        startingPoint: 0,
        stock: 15
    },
    {
        id: 3,
        itemName: "Product 3",
        price: 500,
        startingPoint: 0,
        stock: 53
    }
]


const ItemList = (prop) => {
    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const promise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productsBaseList)
            setLoading(false)
        }, 3000)
    })

    promise
    .then(()=>{
        setProducts(productsFullList)
        console.log('full response')
    })
    .catch(()=>{
        console.log('error')
    })
    
    return (
        <>
            <p>
                {loading ? "Cargando, por favor espere." : "Productos cargados exitosamente"}
            </p>
            {products.map((product, index)=>{
                return <Item product={product} />
            })}
        </>
    )
}

export default ItemList