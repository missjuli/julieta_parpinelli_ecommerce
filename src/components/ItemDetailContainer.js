import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

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
        itemImageUrl:'./assets/zipperbag.jpg',
    }

const productPromise = new Promise((res)=>
    setTimeout(()=>{
        res(product)
        // setLoading(false)
    }, 3000)
) 
    

const ItemDetailContainer = (prop) => {
    
    const [product, setProduct] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const getProduct = ()=>{
        return productPromise
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
            </div>
        </>
    )
}

export default ItemDetailContainer