import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import ProductsPage from "./products";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import SignInPage from "./signIn";
import Footer from "./components/Footer";
import SingleProduct from "./singleProduct";
import CartPage from "./cart";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
