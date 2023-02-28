import catC from "../Components/Carousel/cat-c.jpg"
import dogC from "../Components/Carousel/dog-c.jpg"
import rabbitC from "../Components/Carousel/rabbit-c.jpg"
import turtleC from "../Components/Carousel/turtle-c.jpg"

import { Link } from "react-router-dom";
import "../CustomCSS/Style.css";
import Title from "./Title";
const Start = () => {
  return (
    <>
      <Title />
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col mt-5">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner img-c">
                <div class="carousel-item active ">
                  <img src={catC} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={dogC} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={rabbitC} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={turtleC} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col mt-5">
            <h1 className="py-5 my-5">
              Welcome
              <div className="mt-5">
                <Link to="/home">Get Started</Link>
              </div>
            </h1>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Start;
