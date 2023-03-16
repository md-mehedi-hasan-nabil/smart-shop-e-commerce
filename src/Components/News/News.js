import React from "react";
import img1 from "../../images/latest-news/news-bg-1.jpg";
import img2 from "../../images/latest-news/news-bg-2.jpg";
import img3 from "../../images/latest-news/news-bg-3.jpg";
import img4 from "../../images/latest-news/news-bg-4.jpg";
import img5 from "../../images/latest-news/news-bg-5.jpg";
import img6 from "../../images/latest-news/news-bg-6.jpg";
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
  const news = [
    {
      id: 1,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img1,
    },
    {
      id: 2,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img2,
    },
    {
      id: 3,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img3,
    },
    {
      id: 4,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img4,
    },
    {
      id: 5,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img5,
    },
    {
      id: 6,
      title: "You will vainly look for fruit on it in autumn.",
      date: "27 December, 2019",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
      img: img6,
    },
  ];
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h2 className="fw-bold">Our News</h2>
          <p className="fw-light pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>
        <div className="row py-5 g-4">
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
