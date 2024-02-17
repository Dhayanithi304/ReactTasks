import React, { useContext, useState } from 'react'
import { Context } from './Context'

function Card() {
    const {products} = useContext(Context);
    const {setProducts} = useContext(Context);
    // const {count} = useContext(Context);
    // const {setCount} = useContext(Context);
    //const [isClicked, setIsClicked] = useState(false);

    const handleCountIncrese = (itemID) => {
      setProducts(products.map((item)=>{
        if(itemID == item.id && item.count <= item.stock ){
          return { ...item, count: item.count + 1,
             totalprice: item.totalprice + item.price  };
        }
        return item;
      }));
    }

    const handleCountDecrese = (itemId) => {
      setProducts(products.map((item)=>{
        if(itemId == item.id && item.count > 0 && item.totalprice >= item.price && item.stock > 0){
          return { ...item, count: item.count - 1,
             totalprice: item.totalprice - item.price, stock: item.stock - 1 };
        }
        return item;
      }));
    }

    const handleAddClicked = () => {
      products.map((item)=> {
          if(itemId == item.id ){
          return { ...item, isClicked: item.isClicked = true };
        }
        return item;
      })
    }

    const handleRemove = () => {
      products.map((item)=> {
          if(itemId == item.id ){
          return { ...item, isClicked: item.isClicked = false };
        }
        return item;
      })
    }
  return (
    <div className='container'>    
    {products.map((item) => (
     <div className="card mb-3" key={item.id}>
     <div className="row g-0">
       <div className="col-md-4">
         <img src={item.thumbnail} className="img-fluid rounded" alt="..." />
       </div>

       <div className="col-md-5">
         <div className="card-body text-start">
           <h5 className="card-title  ">{item.title}</h5>
           <p className='card-text'><small className="text-body-secondary">rating: {item.rating}</small></p>
          <dl>  
            <dt><small className="text-body-secondary">DISCRIPTION</small></dt>
            <dd>{item.description}</dd>
          </dl>
         {/* {!isClicked ? <h3>&#8377;{item.price}<small className="text-body-secondary text-muted"> -{item.discountPercentage}%</small>  </h3> : ""} */}
         <h3>&#8377;{item.price}<small className="text-body-secondary text-muted"> -{item.discountPercentage}%</small>  </h3>
          </div>
          <button type="button" className='btn btn-sm btn-primary mx-3' onClick={()=>handleAddClicked()}>Add to Cart</button>
         {item.isClicked ? <button className='btn btn-sm btn-secondary' onClick={()=>handleRemove()}>Remove</button> : ""}
       </div>
       
      {item.isClicked ? 
        <div className="col-md-3">
        <div className="card-body text-end d-flex flex-column justify-content-between" >
          <div>
            <button className='btn-sm btn-secondary rounded-circle' onClick={()=>handleCountDecrese(item.id)}><i className='fa fa-subtract'></i></button>
            <span className='mx-2'>{item.count}</span>
            <button className='btn-sm btn-secondary rounded-circle' onClick={()=>handleCountIncrese(item.id)}><i className='fa fa-add'></i></button>
          </div>
          <p className='card-text'>STOCK : {item.stock}</p>
          <h6 className='card-text'>SHOPPING : FREE</h6>
          <h6 className='card-text'>TOTAL : &#8377;{item.totalprice}</h6>

          <div>
            <button className='btn btn-sm btn-success'>Buy</button>
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
