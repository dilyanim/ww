import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {FaListUl} from "react-icons/fa";
import {GrFavorite} from "react-icons/gr";
import {BsFillBookmarkFill} from "react-icons/bs";
import {MdStarRate} from "react-icons/md";
import { API_KEY } from "../pages/API_KEY";
// import Actors from "../pages/Actors";
// import Trailer from "../pages/Trailer";
import { useDispatch } from "react-redux";

const DetailPage = () => {
  const [detail, setDetail] = useState({});
  const [modal, setModal] = useState(false);
  const { movieId } = useParams();
  // const [click,setClick] = useState(false)
  const [click1, setClick1] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  // const progressEndValue = Math.round(detail.vote_average * 10);
  const [heart, setHeart] = useState();


  // useEffect(() => {
  //   let progerssStartValue = 0;
  //   let progress = setInterval(() => {
  //     progerssStartValue++;
  //     setProgressValue(progerssStartValue);
  //     if (progerssStartValue === progressEndValue) {
  //       clearInterval(progress);
  //     }
  //   }, 20);
  //   return () => {
  //     clearInterval(progress);
  //   };
  // }, [progressEndValue]);
  // const res = {
  //   background: ` conic-gradient( violet ${
  //     progressValue * 3.6
  //   }deg, #0f1b16 0deg)`,
  // };
  function getDetail() {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setDetail(res.data);
    });
  }
  useEffect(() => {
    // getDetail(API_KEY);
  });

  return (
    <>
      <div
        id="detail"
        style={{
          background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}")no-repeat left/cover`,
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="detail">
            <div className="detail--img">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                width={340}
                alt="img"
                onClick={() => {
                  setModal(true);
                }}
              />
              <div
                className="detail--img__modal"
                style={{
                  display: modal ? "block" : "none",
                  zIndex: modal ? "20" : "",
                }}
              >
                <button onClick={() => setModal(false)}>&times;</button>
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                  alt=""
                />
              </div>

              <div
                className="detail--img__blur"
                onClick={() => {
                  setModal(false);
                }}
                style={{
                  display: modal ? "block" : "none",
                  backdropFilter: "blur(2px)",
                }}
              ></div>
            </div>
            <div className="detail--block">
              <h1>{detail.title}</h1>
              <div className="detail--block__group" style={{ display: "flex" }}>
                <p>{detail.release_date}/</p>
                <div>
                  {detail.genres?.map((el) => (
                    <p>{el.name},</p>
                  ))}
                </div>
                <p>
                  /{Math.floor(detail.runtime / 60)}h{" "}
                  {Math.floor(detail.runtime % 60)}m
                </p>
              </div>
              <div className="detail--block__reiting">
                <div className="detail--block__reiting--krug" style={res}>
                  <h5 className="detail--block__reiting--krug__h5">
                    {progressValue}
                    <sup>%</sup>
                  </h5>
                </div>
                <h3>Рейтинг</h3>
                <div className="detail--block__reiting--krug__icon">
                  <FaListUl />{" "}
                </div>
                <div
                  className="detail--block__reiting--krug__icon"
                
                  //   style={{color : heart ? 'red' : "" }}
                >
                  <GrFavorite />{" "}
                </div>
                <div
                  className="detail--block__reiting--krug__icon"
                  onClick={() => setClick1(!click1)}
                  style={{
                    color: click1 ? "#F3CD03" : "",
                  }}
                >
                  <BsFillBookmarkFill />
                </div>
                <div className="detail--block__reiting--krug__icon">
                  <MdStarRate />
                </div>
              </div>
              <div className="detail--block__info">
                <h3> {detail.tagline}"</h3>
                <h1>Обзор</h1>
                <h2>{detail.overview}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Actors />
      <Trailer /> */}
    </>
  );
};

export default DetailPage;
