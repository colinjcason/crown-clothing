import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart)