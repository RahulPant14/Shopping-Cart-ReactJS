import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {

  const totalPrice = cart.reduce((acc, product) => {
    // Assuming price is a string like '₹ 100' and we need to remove the currency symbol
    const price = parseFloat(product.price.replace(/[^\d.-]/g, '')); // Extract the numeric value
    return acc + price;
  }, 0); //

  return (
    <>
     {
      cart.length == 0 ? (
        <>
        <div className="text-center">
          <h1>Your Cart Is Empty</h1>
          <Link to={'/'} className='btn btn-warning'>Continue Shopping.</Link>
        </div>
        </>
      ):(
        cart.map((product)=>{
          return(
            <>
            <div className="container">
                 <Container key={product.id} >
                 <Row>
                    <Col lg="12" md="">
                    <div className="card my-3 mx-auto " >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.id}/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <button className='btn btn-primary me-3'>₹ {product.price}</button>
                          <button className='btn btn-warning'>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div> 
                    </Col>
                  </Row> 
                  </Container>  
            </div>
            </>
          )
        })
      )
      
     }
     {
      cart.length!=0 && (

            <div className="container">
             <div className="d-flex justify-content-center">
             <button className='btn btn-warning me-3'>Checkout</button>
             <button onClick={()=>setCart([])} className='btn btn-danger'>Clear Cart</button>
             </div>
              <div className="d-flex justify-content-between total-amt my-3">
                  <h2>Total Amount</h2>
                  <h2>₹ {totalPrice.toFixed(2)}</h2> {/* Display total price, rounded to 2 decimal places */}
              </div>
            </div>
            
            

      )
     }
     
    
    </>
  )
}

export default Cart