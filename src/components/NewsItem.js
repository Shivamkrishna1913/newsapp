import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, time, source } = props;
  return (
    <div>
      <div className=" card ">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://imgs.search.brave.com/v2R7z5-8RRq2lcpWvcsDvzAViT5gAXuJZE-ryNIlZ0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzUxLzk1LzUz/LzM2MF9GXzI1MTk1/NTM1Nl9GQVFIMFUx/eTFUWnczWmNkUEd5/YndVa0g5MGEzVkFo/Yi5qcGc"
              : imageUrl
          }
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title small">{title}</h5>
          <p className="card-text small">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} at{" "}
              {new Date(time).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm text-light bg-dark"
          >
            Read more..
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
