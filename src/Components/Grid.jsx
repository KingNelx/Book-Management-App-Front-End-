
import { Link } from "react-router-dom";
import CarouselDesign from "./CarouselDesign";

const Grid = () => {
  return (
    <div class="container text-center mt-5 py-5">
      <div class="row">
        <div class="col">
            <CarouselDesign />
        </div>
        <div class="col mt-5 py-5 fs-1">
            <Link to="/"> Get Started </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
