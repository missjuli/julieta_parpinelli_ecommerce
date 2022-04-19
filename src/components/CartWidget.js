import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = (prop) => {
    const total = prop.startingPoint;
    let sum = 0;

    for (let item = 0; item < total.length; item++) {
        sum += total[item];
    }

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} />
            <p> {sum} </p>
        </>
    )
}

export default CartWidget