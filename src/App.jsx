import { Routes, Route } from "react-router";
import Home from './pages/home';
import Header from './components/layout/header';
import Shop from "./pages/shop";
import Footer from "./components/layout/footer";
import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/contact" element={ <Contact/> } /> */}
        {/* <Route path="/cart" element={ <Cart/> } /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

