
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './Navbar';
import Product from './product';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import SearchItems from './SearchItems';
import { items } from './data';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  const [data, setData]=useState([...items]);
  const [cart, setCart]=useState([]);

  return(
    <BrowserRouter>
    <Container className='py-3 m-auto'>
        <Navbar cart={cart} setData={setData}/>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>}/>
        <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
      </Routes>
    </Container>
    </BrowserRouter>
  );
}
export default App;