import Cart from '../cart/index.jsx'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./public/logotec.png" alt="Tec logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Cart />
      </div>
    </header>
  )
}
export default Header