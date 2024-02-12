import React from "react";

function CyberSecurity() {
  const cc = [
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 December 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      content:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "25 September 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      content:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "27 December 2022",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      content:
        "Look around today, you will witness that we are more reliant on technology and devices",
      date: "20 December 2022",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      content:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      date: "9 November 2022",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      content:
        "‍Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      date: "22 June 2022",
    },
  ];
  return (
    <>
      {/* <div className="card-group" id="card-group"> */}
        {cc.map((card, index) => (
          <div className="card cards" key={index}>
            <div className="img-div">
              <img src={card.imgUrl} alt="course" className="card-img-top" />
            </div>
            <div className="card-body">
              <p className="card-head">{card.title}</p>
              <p className="card-text">{card.content}</p>
              <a href="#" className="card-link">
                READ MORE »
              </a>
            </div>
            <div className="card-footer">{card.date}</div>
          </div>
        ))}
      {/* </div> */}
    </>
  );
}

export default CyberSecurity;
