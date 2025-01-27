import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart, setCart}) => {

  const AddToCart=(id,price,title,description,imgSrc)=>{

    const obj={id,price,title,description,imgSrc}
    setCart([...cart, obj])
    console.log("cart element = ", cart)

    toast.success('Your Item Added on Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  return (
    <>
       <Container>
        <Row className='m-auto'>
        {
            items.map((product)=>{
                return(
                    <>
                    <div className="col-md-4 col-sm-12">
                    <Card className='m-1' key={product.id}>
                      <Link to={`/product/${product.id}`}><Card.Img variant="top" src={product.imgSrc} /></Link>
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          {product.description}
                        </Card.Text>
                        <Button variant="primary" className='me-3'>₹ {product.price}</Button>
                        <Button onClick={()=>AddToCart(product.id,product.price,product.title,product.description,product.imgSrc)} variant="warning">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                    </div>
                    </>
                )
            })
        }
        </Row>

       </Container>
    </>
  )
}

export default Product;