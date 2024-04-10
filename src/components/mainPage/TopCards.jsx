import React from "react";
import background1 from "../../imgs/photos/theMazeRunner1.webp";
import background2 from "../../imgs/photos/theMazeRunner2.webp";
import background3 from "../../imgs/photos/theMazeRunner3.webp";
import background4 from "../../imgs/photos/theMazeRunner4.jpg";

const TopCards = () => {

  return (
    <div>

      <div id="myCarousel" class="carousel slide mb- " data-bs-ride="carousel" >

        {/* buttons bottom Cards */}
        <div class="carousel-indicators ">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
        </div>

        {/* top-cards */}
        <div class="carousel-inner ">

          <a href="https://www.imdb.com/title/tt1790864/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_maze" target="_blank">
            <div class="carousel-item active top-card " style={{
              backgroundImage: `url(${background1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }} >
            </div>
          </a>

          <a href="https://www.imdb.com/title/tt4046784/?ref_=fn_al_tt_1" target="_blank">
            <div class="carousel-item top-card " style={{
              backgroundImage: `url(${background2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }} >
            </div>
          </a>

          <a href="https://www.imdb.com/title/tt4500922/?ref_=fn_al_tt_4" target="_blank">
            <div class="carousel-item top-card " style={{
              backgroundImage: `url(${background3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }} >
            </div>
          </a>

          <a href="https://www.imdb.com/title/tt20872022/?ref_=fn_al_tt_7" target="_blank">
            <div class="carousel-item top-card " style={{
              backgroundImage: `url(${background4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }} >
            </div>
          </a>
        </div>

        {/*  buttons right and left */}
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
};

export default TopCards;

