import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Topnav = () => {

  const navigate = useNavigate()

  const [register, setRegistration] = useState({
    ownerName: "",
    petName: "",
    typeOfPet: "",
    petGender: "",
    address: "",
    petAge: "",
    hasVaccine: "",
  });

  const { ownerName, petName, typeOfPet, petGender, address, petAge, hasVaccine } =
    register;

  const registerPet = (e) => {
    setRegistration({ ...register, [e.target.name]: e.target.value.toUpperCase() });
  };

  const submitRegistration = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/registerPet",register)
    navigate('/home')
    window.location.reload();
  }

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg py-3">
        <div class="container-fluid">
          <a class="navbar-brand">View All Pets</a>
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
        <button
          type="button"
          class="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Register Pet
        </button>
        <Link to="/otherPets" class="btn btn-outline-primary mx-2">
          See Other Pets
        </Link>
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
                  <form class="row g-3" onSubmit={(e) => submitRegistration(e)}>
                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Owner Name
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={ownerName}
                        name="ownerName"
                        onChange={(e)=> registerPet(e)}
                        
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="validationDefault02" class="form-label">
                        Pet Name
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault02"
                        required
                        value={petName}
                        name="petName"
                        onChange={(e)=> registerPet(e)}
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Type of Pet
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={typeOfPet}
                        name="typeOfPet"
                        onChange={(e)=> registerPet(e)}
                      />
                    </div>

                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Pet Gender
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={petGender}
                        name="petGender"
                        onChange={(e)=> registerPet(e)}
                      />
                    </div>

                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Address
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={address}
                        name="address"
                        onChange={(e)=> registerPet(e)}
                      />
                    </div>

                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Pet Age
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={petAge}
                        name="petAge"
                        onChange={(e)=> registerPet(e)}
                      />
                    </div>

                    <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">
                        Has Vaccine
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="validationDefault01"
                        required
                        value={hasVaccine}
                        name="hasVaccine"
                        onChange={(e)=> registerPet(e)}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topnav;
