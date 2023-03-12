import dog from '../Images/dog.jpg'
import cat from '../Images/cat.jpg'
import rabbit from '../Images/rabbit.jpg'
import birds from '../Images/bird.jpg'
import turtle from '../Images/turtle.jpg'
import mouse from '../Images/mouse.jpg'
import {Link} from "react-router-dom"

const GridPets = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row other-img">
          <div class="col">
            <div class="card mx-5" style={{ width: "18rem" }}>
              <img src={dog} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">DOGS</h5>
                <Link to="/dogs" class="btn btn-outline-primary">
                  VIEW
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={cat} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">CATS</h5>
                <Link to="/cats"  class="btn btn-outline-primary">
                  VIEW
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={rabbit} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">RABBITS</h5>
                <Link to="/rabbits" class="btn btn-outline-primary">
                  VIEW
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 other-img">
          <div class="col">
            <div class="card mx-5" style={{ width: "18rem" }}>
              <img src={birds} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">BIRDS</h5>
                <Link to="/birds" class="btn btn-outline-primary">
                 VIEW
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={turtle} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">TURTLE</h5>
                <Link to="/turtle" class="btn btn-outline-primary">
                 VIEW
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={mouse} class="card-img-top" alt="..." />
              <div class="card-body shadow-lg">
                <h5 class="card-title">MOUSE</h5>
                <Link to="/mouse" class="btn btn-outline-primary">
                  VIEW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPets;
