
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import { items } from './data';
import Product from './product';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
  }, [id]);

  useEffect(() => {
    if (product.category) {
      const relatedProduct = items.filter((rProduct) => rProduct.category === product.category);
      setRelatedProduct(relatedProduct);
    }
  }, [product]);

  const AddToCart = (id, price, title, description, imgSrc) => {
    
    const newProduct = { id, price, title, description, imgSrc };
    setCart((prevCart) => [...prevCart, newProduct]);

    // Show toast notification
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
        <div className="d-flex justify-content-center align-items-center my-3">
        <div className="img w-50">
          <img className="w-100" src={product.imgSrc} alt={product.id} />
        </div>
        <div className="items-desc text-center">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button className="btn btn-primary me-2">₹ {product.price}</button>
          <button
            onClick={() =>
              AddToCart(product.id, product.price, product.title, product.description, product.imgSrc)
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <h1>Related Products</h1>
      </div>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
