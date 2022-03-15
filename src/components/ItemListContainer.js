import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const productsBaseList = [
    {
        id: 1,
        itemName: "Cartuchera Zipper",
        details:'Cartuchera simple con cierre (15x25)',
        price: 300,
        startingPoint: 0,
        stock: 10,
        itemImageUrl:"./assets/zipperbag.jpg",
    },
]

const productsFullList = [
    {
        id: 1,
        itemName: "Cartuchera Zipper",
        details:'Cartuchera simple con cierre (15x25)',
        price: 300,
        startingPoint: 0,
        stock: 10,
        itemImageUrl:"./assets/zipperbag.jpg",
    },
    {
        id: 2,
        itemName: "Cartuchera Box",
        details:'Cartuchera vertical con cierre (15x20)',
        price: 400,
        startingPoint: 0,
        stock: 15,
        itemImageUrl:"./assets/vertical-bag.jpg",
    },
    {
        id: 3,
        itemName: "Cartuchera rollo",
        details:'Cartuchera que se puede enrrollar (35x20)',
        price: 500,
        startingPoint: 0,
        stock: 53,
        itemImageUrl:"./assets/roll-bag.jpg",
    },
]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promise = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productsBaseList)
                setLoading(false)
            }, 3000)
        })
    
        promise
        .then(()=>{
            setProducts(productsFullList)
        })
        .catch(()=>{
            console.log('error')
        })
    }, [id])

    return (
        <>
            <div className="d-flex">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer