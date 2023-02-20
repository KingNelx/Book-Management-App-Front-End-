import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg py-3">
        <div class="container-fluid">
          <a class="navbar-brand">Register Your Pet</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/" className="btn btn-outline-success">
              {" "}
              Back{" "}
            </Link>
          </form>
        </div>
      </nav>
      <section className="mt-5 mx-5">
        {/* <Link to="/registerPet" type="button" class="btn btn-outline-primary">Register Pet</Link> */}

        <button
          type="button"
          class="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Register Pet
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                 Fill the Following:
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
              <div className="container mt-5">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Owner Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Pet Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
           Type of Pet
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Pet Gender
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Pet Age
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
          Has Vaccine
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topnav;
