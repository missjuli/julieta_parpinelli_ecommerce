import { useState } from 'react'
import { Card, Button } from 'react-bootstrap';

const ItemCount = (prop) => {

    const [counter, setCounter] = useState(prop.startingPoint)
    const [stock] = useState(prop.stock)

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
                    <Card.Title>Producto 1 </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Unidades en stock: {stock}</Card.Subtitle>
                    <Card.Text> Unidades: {counter} </Card.Text>
                    <Button variant="outline-primary mx-2" onClick={addItem}>
                        Agregar
                    </Button>
                    <Button variant="outline-primary mx-2" onClick={deleteItem}>
                        Eliminar
                    </Button>
                    <Button variant="primary mx-2 mt-2 d-block w-100" onClick={addToCart}>
                        Agregar al carrito
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount
