import Cart from '../cart/index.jsx'
import logo from '../../../assets/logotec.png'
import './index.css'
import { NavLink } from 'react-router'

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Tec logo"/>
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Cart />
      </div>
    </header>
  )
}
export default Header