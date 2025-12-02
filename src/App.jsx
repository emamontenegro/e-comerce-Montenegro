import { Routes, Route } from "react-router";
import Home from './pages/home';
import Header from './components/layout/header';
import Shop from "./pages/shop";
import Footer from "./components/layout/footer";
import ProductDetail from "./pages/detailsproducts";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import './App.css';




function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/shop/:id" element={<ProductDetail/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;

