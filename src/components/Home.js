import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchMarvelEvent } from "../utils/marvel_api/marvel_event";
import "./../styles/home.scss";
import Carousel from "react-material-ui-carousel";
//

const Home = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    fetchEvent();
  }, []);
  const fetchEvent = async () => {
    const { results } = await fetchMarvelEvent();
    setEvent(results);
    console.log(results);
  };

  return (
    <div className="main-container">
      <div className="events-container" align="center">
        <Carousel autoPlay infiniteLoop="true">
          {events.map((item, i) => (
            <div className="news-events" key={i}>
              <img
                style={{ width: "100vw", height: "75vh" }}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              ></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
//
export default Home;
