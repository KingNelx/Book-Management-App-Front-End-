import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewData = () => {
    // viewing state
  const [pets, setPets] = useState([]);

  useEffect(() => {
    loadAllPets();
  }, []);

  const loadAllPets = async () => {
    const result = await axios.get("http://localhost:8080/api/getAllPets");
    setPets(result.data);
  };

  // adding state
  const [myPets, addPets] = useState({
        ownerName: "",
        petName: "",
        ownerAge: "",
        petAge: "",
        address: "",
        petGender: "",
        typeOfPet: "",
        hasVaccine: ""
        
  })

  // de construct

  const {ownerName, petName, ownerAge, petAge, address, petGender, typeOfPet, hasVaccine} = myPets

  // on change

  const onChange = (e) =>{
    const toUpperCaseValue = e.target.value.toUpperCase();
    addPets({... myPets, [e.target.name]: toUpperCaseValue})
  }

  return (
    <div className="container mt-5">
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
                Fill up the following.
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Owner name
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="ownerName"
                    value={ownerName}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Pet Name
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="petName"
                    value={petName}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Owner Age
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="ownerAge"
                    value={ownerAge}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Pet Age
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="petAge"
                    value={petAge}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Address
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="address"
                    value={address}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Pet Gender
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="petGender"
                    value={petGender}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Type of Pet
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="typeOfPet"
                    value={typeOfPet}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">
                    Has Vaccine
                  </label>
                  <input
                    type={"text"}
                    class="form-control"
                    id="validationCustom01"
                    required
                    name="hasVaccine"
                    value={hasVaccine}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
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

      {pets.length > 0 ? (
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Owner Name</th>
              <th scope="col">PetName</th>
              <th scope="col">Pet Gender</th>
              <th scope="col">Type of Pet</th>
              <th scope="col">Has Vaccine</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{pet.ownerName}</td>
                <td>{pet.petName}</td>
                <td>{pet.petGender}</td>
                <td>{pet.typeOfPet}</td>
                <td>{pet.hasVaccine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">NO DATA FOUND</p>
      )}
    </div>
  );
};

export default ViewData;
