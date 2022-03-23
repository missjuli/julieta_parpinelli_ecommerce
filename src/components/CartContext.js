import { createContext, useState } from "react"

export const context = createContext()
const { Provider } = context

const CartContext = ({children}) => {
    const [cartContent, setCartContent] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    
    const removeItem = (id) => {}

    const addItem = (product, totalAmount) => {
        if(isInCart(product.id)){
            console.log(cartContent, product)
        } else {
            const cart = cartContent.slice(0)
            cart.push(product)
        }
    }

    const clear = () => {
        setCartContent([])
    }

    const isInCart = (id) => {
        const itemOnCart = cartContent.find((item)=> item.id === product.id)
        return itemOnCart ? true : false
    }

    const contextValue = {
        cartItems: [],
        totalAmountOfItems: 0
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext