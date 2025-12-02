import logo from '../../../assets/logotec.png'
import { NavLink } from 'react-router'
import Cartitem from '../cart'
import './index.css'


const Header = () => {

  return (
    <header className="header">

      <div className="logo">
          <img src={logo} alt="Tec logo" className='logoimg'/>
      </div>
      <nav className="nav">

        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <div className="cart-icon">
        <NavLink to="/cart" >
          <Cartitem />
        </NavLink>
      </div>

    </header>
  )
}
export default Header