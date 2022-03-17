import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const productsBaseList = [
    {
        id: 1,
        categoryId: 1,
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
        categoryId: 1,
        itemName: "Cartuchera Zipper",
        details:'Cartuchera simple con cierre (15x25)',
        price: 300,
        startingPoint: 0,
        stock: 10,
        itemImageUrl:"./assets/zipperbag.jpg",
    },
    {
        id: 2,
        categoryId: 1,
        itemName: "Cartuchera Box",
        details:'Cartuchera vertical con cierre (15x20)',
        price: 400,
        startingPoint: 0,
        stock: 15,
        itemImageUrl:"./assets/vertical-bag.jpg",
    },
    {
        id: 3,
        categoryId: 1,
        itemName: "Cartuchera rollo",
        details:'Cartuchera que se puede enrrollar (35x20)',
        price: 500,
        startingPoint: 0,
        stock: 53,
        itemImageUrl:"./assets/roll-bag.jpg",
    },
    {
        id: 4,
        categoryId: 2,
        itemName: "Estampa a rayas",
        details:'Estampa a rayas tonos pastel (1mt)',
        price: 1000,
        startingPoint: 0,
        stock: 15,
        itemImageUrl:"./assets/stamp-stripes.jpg",
    },
    {
        id: 5,
        categoryId: 3,
        itemName: "Giftbox - Baby",
        details:'Giftbox para bebés. Contiene un muñeco de apego y un sonajero',
        price: 1500,
        startingPoint: 0,
        stock: 3,
        itemImageUrl:"./assets/giftbox-1.jpg",
    },
]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        const promise = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productsBaseList)
                setLoading(false)
            }, 2000)
        })
    
        promise
        .then(()=>{
            if(categoryId) {
                setProducts(productsFullList.filter((product)=> product.categoryId == categoryId))
            } else {
                setProducts(productsFullList)
            }
        })
        .catch(()=>{
            console.log('error')
        })
    }, [categoryId])

    return (
        <>
            <div className="d-flex">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer