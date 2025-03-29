import React, { useEffect } from "react";
import "./Post.css";

const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const newObserver = new IntersectionObserver((param) => {
      console.log(param);
      if (param[0].isIntersecting) {
        newObserver.unobserve(lastImage);
        setPageNo((pageNo) => pageNo + 1);
      }
    });

    const lastImage = document.querySelector(".image:last-child");
    if (!lastImage) return;
    console.log(newObserver.observe(lastImage));
  }, [data]);

  return (
    <>
      <section className="container">
        {data.map((item, index) => {
          return (
            <img
              key={index}
              className="image"
              src={item.download_url}
              alt="image"
            />
          );
        })}
      </section>
    </>
  );
};

export default Post;
