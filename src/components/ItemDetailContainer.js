import { useEffect, useState } from "react"
import { Card, Button } from 'react-bootstrap';
import ItemDetail from "./ItemDetail"
import Modal from "react-bootstrap/Modal";

// const [loading, setLoading] = useState(true)

const product =
    {
        id: 1,
        itemName: "Cartuchera Zipper",
        details:'Cartuchera simple con cierre (15x25)',
        price: 300,
        startingPoint: 0,
        stock: 5,
        itemImageUrl:"./assets/zipperbag.jpg",
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
    
    const showModal = () => {
        setIsOpen(true);
        console.log(prop)
    };
    
    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div>
                <Button variant="primary mx-2 mt-2 d-block w-100 text-black" onClick={showModal}>
                    Ver detalles
                </Button>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title> {prop.product.itemName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex">
                        <img src={prop.product.itemImageUrl} />
                        <div className="m-3">
                            <p> {prop.product.details} </p>
                            <p> Precio: ${prop.product.price} </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={hideModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
                <ItemDetail product={product} />
            </div>
        </>
    )
}

export default ItemDetailContainer