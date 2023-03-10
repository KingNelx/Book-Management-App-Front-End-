import catImg from '../Images/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg'
import dogImg from '../Images/anoir-chafik-2_3c4dIFYFU-unsplash.jpg'
import bonnieImg from  '../Images/bonnie-kittle-MUcxe_wDurE-unsplash.jpg'
const CarouselDesign = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={catImg} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={dogImg} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bonnieImg} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselDesign;
