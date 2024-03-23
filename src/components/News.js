import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);

    setLoading(false);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-News`;
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    props.setProgress(0);

    const url = `https://newsapi.org/v2/top-headlines?&country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    props.setProgress(50);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);

    setLoading(false);
    props.setProgress(100);
  };

  return (
    <>
      <h2
        className="text-center fw-bold display-6"
        style={{ margin: "40px 0px" }}
      >
        {capitalizeFirstLetter(props.category)} News : Top headlines
      </h2>
      {<h5 className="">total Search Results : {totalResults}</h5>}
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 3,
  category: "science",
  setProgress: 10,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
