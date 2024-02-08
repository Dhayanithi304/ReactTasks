import React from "react";
import "./cards.css";
 
export function DS() {
   const ds = [
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      content:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      content:
        "Data scientists are the creators behind transforming the raw data into edible data insights.",
      date: "15 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      content:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      content:
        "India has been making some serious waves in the world of data. Just like the",
      date: "8 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-1536x804.png",
      title: "Top 10 Data Science Tools in 2024",
      content:
        "Data Science is an in-demand profession and will continue growing in the coming years. From",
      date: "1 November 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      content:
        "‍Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "26 October 2023",
    },
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      content:
        "‍We all know about the kind of buzz surrounding data science right now, it is",
      date: "5 October 2023",
    }
  ];
  return (
    <>
        {ds.map((card, index) => (
          <div id="card" key={index}>
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
     </>
  );
}

export default DS;
