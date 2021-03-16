import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

export default Cart