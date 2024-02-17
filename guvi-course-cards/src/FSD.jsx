import React from "react";
import "./cards.css";

export function FSD() {
  const fsd = [
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Introduction-to-HTML-Tags-A-Comprehensive-Guide-With-Examples.webp",
      title:
        "Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]",
      content:
        "Creating a website on our own must have been on everyone’s bucket list since the",
      date: "6 February 2024",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      content:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      date: "22 January 2024",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      content:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "15 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      content:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "15 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      content:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "10 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title: "Best Books to Learn Full-Stack Development",
      content:
        "‍Are you interested in becoming a full-stack developer but not sure where to start? In",
      date: "9 November 2023",
    },
  ];
  return (
    <>
      {/* <div className="card-group" id="card-group"> */}
        {fsd.map((card, index) => (
          <div className="card cards" key={index}>
            <div className="img-div">
            <img src={card.imgUrl} alt="course" className="card-img-top" />
            </div>
            <div className="card-body">
              <p className="card-head">{card.title}</p>
              <p className="card-text">{card.content}</p>
              <a href="#" className="card-link">READ MORE »</a>
            </div>
            <div className="card-footer">{card.date}</div>
          </div>
        ))}
      {/* </div> */}
    </>
  );
}

export default FSD;
