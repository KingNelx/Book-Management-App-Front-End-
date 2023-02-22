import dog from '..//../Images/dog.jpg'
import cat from '..//../Images/cat.jpg'
import bird from '..//../Images/bird.jpg'
import rabbit from '..//../Images/rabbit.jpg'
import snake from '..//..//Images/snake.jpg'
import turtle from '..//..//Images/turtle.jpg'
import '..//..//CustomCSS/PetImg.css'

const PetCols = () => {
  return (
    <div>
      <div class="container text-center mt-5 pet-img">
        <div class="row mx-3">
          <div class="col mx-3">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={dog} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DOGS</h5>
                <p class="card-text">
                 
                </p>
                <a href="#" class="btn btn-primary">
                 View
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={cat} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CATS</h5>
                <p class="card-text">
                 
                </p>
                <a href="#" class="btn btn-primary">
                 View
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={rabbit} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">RABBITS</h5>
                <p class="card-text">
                  
                </p>
                <a href="#" class="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5 pet-img mb-5 py-3">
        <div class="row mx-3">
          <div class="col mx-3">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={turtle} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">TURTLES</h5>
                <p class="card-text">
                  
                </p>
                <a href="#" class="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={snake} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">SNAKES</h5>
                <p class="card-text">
                 
                </p>
                <a href="#" class="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg" style={{ width: "18rem" }}>
              <img src={bird} class="card-img-top shadow-lg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">BIRDS</h5>
                <p class="card-text">
                 
                </p>
                <a href="#" class="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCols;
