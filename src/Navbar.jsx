import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './data'
import {  BsFillCartCheckFill  } from "react-icons/bs";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



const Navbar = ({setData, cart}) => {
    // console.log(useLocation())
    const location = useLocation();
    const navigate = useNavigate();

    const [search, setSearch]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search/${search}`)
        setSearch("");
    }

    const filterByCategory =(category)=>{
        const element = items.filter((product)=>product.category === category)
        // console.log(element)
        setData(element)
    }

    const filterByPrice = (price)=>{
        const element = items.filter((product)=>product.price >=price)
        setData(element)
    }

    
  return (
    <>
       <Container>
        <Row>
            <Col>
            <header className='sticky-top'>
            <div className="nav-bar">                
                    <Col lg="2" sm="2"><Link to='/' className="logo">E-cart</Link></Col>
                      <Col lg="8" sm="8">   
                        <form onSubmit={handleSubmit} className="search-bar">
                         <input type="text" placeholder='Search Products' value={search} onChange={(e)=>setSearch(e.target.value) } />
                        </form>
                      </Col>
                    <Col lg="2" sm="2" className='text-right'>
                    <Link to='./cart' className="cart">
                    <button type="button" className="btn btn-primary position-relative">
                      < BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                    </Link>
                    </Col>
            </div>
            {
                location.pathname=='/'&&(

                    <div className="nav-wrapper">
                    <div className="items">Filter By</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>setData(items)}>No filter</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByCategory('mobiles')}>Mobiles</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByCategory('laptops')}>Laptops</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByCategory('tablets')}>Tablets</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByPrice(29000)}>{">="}29000</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByPrice(39000)}>{">="}39000</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByPrice(49000)}>{">="}49000</div>
                    <div className="items items-hover cursor-pointer" onClick={()=>filterByPrice(59000)}>{">="}59000</div>
                </div>

                )
            }
           
        </header>
            </Col>
        </Row>
       </Container>
    </>
  )
}

export default Navbar