import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ProductList from './components/ProductLists';
import Policy from './pages/Policy';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:category" element={<ProductList />} />
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
