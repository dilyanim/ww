import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiFilmProjector } from "react-icons/gi";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleChange = () => {
    navigate(`/movie-search/${value}`);
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="nav">
            <NavLink to="/">
              <GiFilmProjector
                style={{
                  color: "white",
                }}
                className="camera"
              />
            </NavLink>

            <NavLink style={{
              color: " rgb(160, 0, 0)" ,
              fontSize : "30px"
            }} to="/">Home</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/top">Top Rated</NavLink>
            <NavLink to="/up">Upcoming</NavLink>
            <NavLink to="/now_playing">Now playing</NavLink>

            {/* <div className="header-input">
              <input
                className="input"
                onChange={(el) => {
                  setValue(el.target.value);
                }}
                style={{
                  display: search ? "none" : "block",
                  transition: "2s",
                }}
                value={value}
                type="text"
                placeholder="Поиск..."
              />

              <button className="header-btn" onClick={() => setSearch(!search)}>
                {" "}
                {search ? <BsSearchHeart /> : <PiControlBold />}{" "}
              </button>
            </div> */}

            {/* <div  onClick={() => setIcon   } style={{
                               
                              }} className="icon-search">   <BsSearchHeart/></div>  */}

            {/* <div
              className="hight"
              onClick={() => setDark(!dark)}
              style={{
                display: dark ? "none" : "block",
                transiction: "1s",
              }}
            >
              <MdOutlineDarkMode />
            </div>
            <div
              className="sun"
              onClick={() => setDark(!dark)}
              style={{
                display: dark ? "block" : "none",
                transiction: "1s",
              }}
            >
              <GoSun />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
