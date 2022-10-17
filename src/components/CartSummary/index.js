// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(e => {
        total += e.price * e.quantity
      })

      return (
        <>
          <h1 className="cs-head">
            Order Total: <span className="s-cs"> RS {total}</span>{' '}
          </h1>
          <p className="cs-para">{cartList.length} Items in cart</p>
          <button type="button" className="butt-cs">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
