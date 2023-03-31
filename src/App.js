import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllNews from './pages/AllNews/AllNews';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminOrderList from './pages/AdminOrderList/AdminOrderList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartDetails from './pages/CartDetails/CartDetails';
import AdminProducts from './pages/AdminProducts/AdminProducts';
import CustomerOrder from './pages/CustomerOrder/CustomerOrder';
import AllProducts from './pages/AllProducts/AllProducts';
import AdminPrivateRoute from './Components/AdminPrivateRoute/AdminPrivateRoute';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<AllNews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<AdminPrivateRoute><Dashboard /></AdminPrivateRoute>} />
        <Route path='/product-details/:productId' element={<AdminPrivateRoute><ProductDetails /></AdminPrivateRoute>} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/cart-details' element={<AdminPrivateRoute><CartDetails /></AdminPrivateRoute>} />
        {/* <Route path='/customers' element={<Customer />} /> */}
        <Route path='/make-admin' element={<MakeAdmin />} />
        <Route path='/products' element={<AdminPrivateRoute><AdminProducts /></AdminPrivateRoute>} />
        <Route path='/orders' element={<AdminPrivateRoute><AdminOrderList /></AdminPrivateRoute>} />
        <Route path='/order/:userId' element={<AdminPrivateRoute><CustomerOrder /></AdminPrivateRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
