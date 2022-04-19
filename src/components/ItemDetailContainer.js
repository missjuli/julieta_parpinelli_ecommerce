import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount"
import { db } from "../Firebase"
import { where, query , collection, doc, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

useEffect(()=>{
    const productCollection = collection(db, "products")
    const queryProductById = query(productCollection,where("id", "==", Number(id)))
    const documents = getDocs(queryProductById)

    documents
    .then((data)=> setProduct(data.docs.map(doc=>doc.data())))
    .catch((error)=> alert(error))
    .finally(() => setLoading(false))
}, [id])

    return (
        <>
        {loading
        ? <p> Cargando. Aguarde por favor.</p>
        : <div className="m-5">
                <ItemDetail product={product} />
                <div>
                    <ItemCount product={product[0]} id={product[0].id} startingPoint={product[0].startingPoint} stock={product[0].stock}/>
                    <NavLink to={`/cart`}>
                        <Button variant="primary mx-2 mt-2 d-block text-uppercase text-black">
                            Ir al carrito de compras
                        </Button>
                    </NavLink>
                </div>
            </div>
        }
        </>
    )
}

export default ItemDetailContainer