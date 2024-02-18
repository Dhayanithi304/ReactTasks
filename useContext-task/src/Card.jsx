import React, { useContext, useState } from 'react'
import { Context } from './Context'
import "./card.css" 

function Card() {
    const {products} = useContext(Context);
    const {setProducts} = useContext(Context);
    const { cart } = useContext(Context)
    const { setCart } = useContext(Context)

  //handle cart quantity increase at the same time it stock and price change automatically 
    const handleCountIncrease = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id && item.stock > 0 ){
          return { ...item, count: item.count + 1,
             totalprice: item.totalprice + item.price,
             stock: item.stock - 1  };
        }
        return item;
      }));
    }

  //handle cart quantity decrease at the same time it stock and price change automatically 
    const handleCountDecrease = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id && item.count > 0 && item.totalprice >= item.price && item.stock > 0){
          return { ...item, count: item.count - 1,
              totalprice: item.totalprice - item.price,
              stock: item.stock + 1 };
        }
        return item;
      }));
    }

    //handle add to the cart then this show quantity price section and show remove button to remove from the cart
    const handleAddClicked = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id){
          !item.isClicked ? setCart(cart=> cart + 1) : false; 
          return { ...item, isClicked: item.isClicked = true };
        }
        return item;
      }));

    }

    //handle to remove from the and remove quantity section
    const handleRemove = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id ){
          return { ...item, isClicked: item.isClicked = false,
            stock: item.stock + item.count,
            count: item.count = 0,
            totalprice: item.totalprice = item.price,
           };
        }
        return item;
      }));
      cart >= 0 ? setCart(cart=> cart - 1) : cart;
    }
    const handleBuyBtn = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id ){
          return { ...item, stock: item.stock + item.count,
            count: item.count = 0,
            totalprice: item.totalprice = item.price,
           };
        }
        return item;
      }));
    }

    
  return (
    <div className='container z-index-0'>    
    {products.map((item) => (
     <div className="card mb-3 " key={item.id}>
     <div className="row g-3">
       <div className="col-md-4 d-flex align-items-center">
         <img src={item.thumbnail} className="img-fluid rounded" alt="..." />
       </div>
       <div className="col-md-5 d-flex ">
         <div className="card-body text-start d-flex flex-column justify-content-between">
           <h4 className="card-title ">{item.title}</h4>
           <p className='card-text fw-bold rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <span className='fw-lighter text-dark'>{item.rating}</span>
            </p>
          <dl className=''>
            <dt className='descrip'>DISCRIPTION</dt>
            <dd className='d-para'>{item.description}</dd>
          </dl>
          <h4>&#8377;{item.price}<span className="text-body-secondary text-muted fs-5"> -{item.discountPercentage}%</span>  </h4>
          <div>
            <button type="button" className='btn btn-sm btn-primary fw-bold' onClick={()=>handleAddClicked(item.id)}>Add to Cart</button>
            {item.isClicked ? <button className='btn btn-sm btn-secondary mx-2  fw-bold' onClick={()=>handleRemove(item.id)}>Remove</button> : ""}
          </div>
          </div>
       </div>
       
      {item.isClicked ? 
      <div className="col-md-3 d-flex bg-light rounded py-3">
        <div className="card-body text-end d-flex flex-column justify-content-between" >
          <div className='mb-4 d-flex justify-content-end'>
            <button className='btn btn-sm btn-light border-secondary rounded-end rounded-circle addbtn' onClick={()=>handleCountDecrease(item.id)}><i className='fa fa-subtract cou'></i></button>
            <span className='mx-2 fs-5 fw-bold border-primary '>{item.count}</span>
            <button className='btn btn-sm btn-secondary rounded-start rounded-circle addbtn' onClick={()=>handleCountIncrease(item.id)}><i className='fa fa-add cou'></i></button>
          </div>
          <div className='mb-5'>
            <p className='card-text text-start d-flex justify-content-between fs-6 fw-bold para'><span>STOCK :</span><span>{item.stock}</span></p>
          </div>
            <p className='card-text text-start d-flex justify-content-between para '><span>SHIPPING :</span><span>FREE</span></p>
          <div className='total-div pt-4 mb-4'>
            <p className='card-text text-start d-flex justify-content-between align-items-center para'><span>TOTAL :</span><span className='fs-5 fw-bold'>&#8377;{item.totalprice}</span></p>
          </div>
          <div>
            <button className='btn btn-sm btn-success fw-bold m-0' onClick={()=>handleBuyBtn(item.id)}>Buy</button>
          </div>
        </div>
      </div>
      : ""
      }
     </div>
   </div>
    ))}
    </div>
  )
}

export default Card
