import React from "react";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [isClicked, setIsClicked] = useState([]);
  const [count, setcount] = useState(0);

  const countIncrease = (id) => {
    setcount(count + 1);
    setIsClicked((arr) => [...arr, id]);
  };

  const countdecrease = (id) => {
    if (count > 0) {
      setcount(count - 1);
      setIsClicked(isClicked.filter((itemid) => itemid !== id));
    }
  };

  const handleClear = () => {
    setcount(0);
    setIsClicked([]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbdZoNm_vkYeRAU2_DPUZ7gsgZoyr7YZPBQ&usqp=CAU",
      name: "Rolls-Royce Boat Tail",
      star: 5,
      price: "$26.2 million",
    },
    {
      id: 2,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGJj9K8OZa82Zwvc1PjGzsL5FGjIRGZ2aJw&usqp=CAU",
      name: "Bugatti la Voiture Noire",
      star: 5,
      price: "$18.1 million",
    },
    {
      id: 3,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsta0xROot7IgSMF4qqcsXtjycIAGC5hKzQ&usqp=CAU",
      name: "Pagani Zonda HP Barchetta",
      star: 5,
      price: "$17.9 million",
    },
    {
      id: 4,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkskzFPZBIVd3VulP5PQHE96SYu-Hyr9IdWg&usqp=CAU",
      name: "Rolls-Royce Sweptail",
      star: 5,
      price: "$13.2 million",
    },
    {
      id: 5,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mlotylo-QCTEiX4kuQ7lePRxH82BNTxq4w&usqp=CAU",
      name: "Bugatti Centodieci",
      star: 5,
      price: "$9.1 million",
    },
    {
      id: 6,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrT1THR9cJc6e1ni8qLbU-XrqKBd2cwseNQ&usqp=CAU",
      name: "Lamborghini Veneno",
      star: 5,
      price: "$8.3 million",
    },
    {
      id: 7,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTme3DE9lEm2XfQKMyzPshvU3GpPloJKJmazA&usqp=CAU",
      name: "Maybach Exelero",
      star: 4,
      price: "$8 million",
    },
    {
      id: 8,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3ZpXz_62RFVivj64Zcegmht2PzAmzfKobg&usqp=CAU",
      name: "Bugatti Divo",
      star: 3,
      price: "$5.7 million",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="branding-area">
          <h1>Luxury Cars</h1>
        </div>
        <div className="count-area">
          <i className="fa fa-cart-shopping"></i>
          <span className="cart-count">Cart {count}</span>
        </div>
      </header>

      <div className="container">
        <div className="clearBtn-div">
          <button onClick={handleClear} className="clrBtn">
            Clear All
          </button>
        </div>
        <div id="card-group">
          {data.map((items) => (
            <div className="card" key={items.id}>
              <div className="img-div">
                <img src={items.imgUrl} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                {items.star > 0 ? (
                  items.star == 1 ? (
                    <i className="fa fa-star"></i>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {items.star == 2 ? (
                  <i className="fa fa-star">
                    <i className="fa fa-star"></i>
                  </i>
                ) : (
                  ""
                )}
                {items.star == 3 ? (
                  <i className="fa fa-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </i>
                ) : (
                  ""
                )}
                {items.star == 4 ? (
                  <i className="fa fa-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </i>
                ) : (
                  ""
                )}
                {items.star == 5 ? (
                  <i className="fa fa-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </i>
                ) : (
                  ""
                )}
                <p className="card-text">{items.price}</p>
                {!isClicked.includes(items.id) ? (
                  <button
                    onClick={() => countIncrease(items.id)}
                    className="addBtn"
                  >
                    Add to cart
                  </button>
                ) : (
                  ""
                )}
                {isClicked.includes(items.id) ? (
                  <button
                    onClick={() => countdecrease(items.id)}
                    className="removeBtn"
                  >
                    Remove
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
