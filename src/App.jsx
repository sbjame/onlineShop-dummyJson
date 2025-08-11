import {Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import Home from './features/home/pages/Home';
import Product from './features/products/page/Product';
import Cart from './features/cart/page/Cart';
import ProductList from './features/products/components/ProductLists';
import Policy from './features/policy/pages/Policy';
import ProductDetail from './features/products/page/ProductDetail';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:category" element={<ProductList key={window.location.pathname} />} />
          <Route path='/product/:category/:slug' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/policy' element={<Policy/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
