import { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const Item = (prop) => {

    const [counter, setCounter] = useState(prop.product.startingPoint)
    const [stock] = useState(prop.product.stock)

    const addItem = () => {
        if (stock > counter) {
            setCounter(counter+1)
        }
    }

    const deleteItem = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    }

    const addToCart = () => {
        console.log('Carrito de compras editado')
    }


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {prop.product.itemName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.product.stock}</Card.Subtitle>
                    <Card.Text> Unidades: {counter} </Card.Text>
                    <Button variant="outline-primary mx-2" onClick={addItem}>
                        Agregar
                    </Button>
                    <Button variant="outline-primary mx-2" onClick={deleteItem}>
                        Eliminar
                    </Button>
                    <Button variant="primary mx-2 mt-2 d-block w-100 text-black" onClick={addToCart}>
                        Agregar al carrito
                    </Button>
                    <NavLink to={`/product/${prop.product.id}`}>
                        <Button variant="primary mx-2 mt-2 d-block w-100 text-black">
                            Ver detalles
                        </Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
