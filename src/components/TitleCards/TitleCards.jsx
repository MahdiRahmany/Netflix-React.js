import { useRef, useState } from "react";
import cards_data from "../../assets/cards/Cards_data";
import "./TitleCards.css";
import { useEffect } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWE1NWRjMjU0ZDAzNjg2MzIwYmZhYTJhNDZhODlmYyIsIm5iZiI6MTcyNTM3NDYzMy4zNTM2OTYsInN1YiI6IjY2ZDcxNzM0ZWViYzBjYjAxN2RmODNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMZhJ96cL7rNlg49h6Qh5hdR4WuFZp376YiUK0pDGt0",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card) => {
          return (
            <div className="card" key={card}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TitleCards;
