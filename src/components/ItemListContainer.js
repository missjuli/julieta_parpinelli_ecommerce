import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const queryProductsByCategoryId = query(collection(db, "producs"),where(categoryId))
        const productCollection = collection(db, "products")
        if(categoryId) {
            getDocs(queryProductsByCategoryId)
            .then((data)=>{
                setProducts(
                    data.docs.map(product=>
                        ({
                            products: product.data(),
                            id: product.id,
                        })
                    )
                )
            })
            .catch(()=>{alert('error')})
        } else {
            getDocs(productCollection)
            .then((data)=>{
                setProducts(
                    data.docs.map(product=>
                        ({
                            products: product.data(),
                            id: product.id,
                        })
                    )
                )
            })
            .catch(()=>{alert('error')})
        }
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