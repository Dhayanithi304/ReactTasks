import React from "react";

function Carrer() {
  const carrer = [
    {
      imgUrl:
        "	https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image.jpg",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      content:
        "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      date: "2 February 2024",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      content:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "9 January 2024",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      content:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date: "13 December 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      content:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "4 December 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      content:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "2 December 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      content:
        "‍Automation Test Engineer Resume: 10 Important Things To Consider",
      date: "1 December 2023",
    },
  ];
  return (
    <>
      {/* <div className="card-group" id="card-group"> */}
        {carrer.map((card, index) => (
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

export default Carrer;
