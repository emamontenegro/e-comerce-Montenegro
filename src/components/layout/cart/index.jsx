import { FaShoppingCart } from 'react-icons/fa'
import './index.css'

const Cart = () => {
  const itemCount = 17

  return (
    <div className="cart-icon">
      <FaShoppingCart size={24} />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  )
}

export default Cart