import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart)