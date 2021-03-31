import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                <span className='empty-message'>Your Cart is empty</span>
            )}
        </div>
        <Button 
            onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart))