import { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const Item = (prop) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {prop.product.itemName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.product.stock}</Card.Subtitle>
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
