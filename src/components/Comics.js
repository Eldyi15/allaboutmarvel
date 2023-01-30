import React, { useEffect, useState } from "react";
import { fetchComics } from "./../utils/marvel_api/marve_comics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../styles/comics.scss";
import { Modal } from "@mui/material";
import { Button } from "@mui/material";

const Comics = () => {
  const [comics, setComics] = useState([]);
  let offset = 0;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchComics(offset);

    setComics(response.results);

    // console.log(comics);
  };

  const handleFlip = (index) => {
    console.log(comics[index]);
  };
  const loadMore = async () => {
    offset += 20;

    const response = await fetchComics(offset);
    setComics((curr) => [...curr, ...response.results]);
    console.log(response.results);
  };
  return (
    <div>
      <div className="container">
        {comics.map((comic, index) => (
          <div className="img" key={index} onClick={() => handleFlip(index)}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            ></img>
            <h5>{comic.title}</h5>
          </div>
        ))}
      </div>
      <div align="center">
        <div className="load-more">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default Comics;
