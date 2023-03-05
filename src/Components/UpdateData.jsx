import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const UpdateData = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [pet, updatePate] = useState({
    ownerName: "",
    petName: "",
    typeOfPet: "",
    petGender: "",
    address: "",
    petAge: "",
    hasVaccine: "",
  });

  const {
    ownerName,
    petName,
    typeOfPet,
    petGender,
    address,
    petAge,
    hasVaccine,
  } = pet;

  const updatePet = (e) => {
    updatePate({... pet, [e.target.name]: e.target.value})
  }

  const petUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/pet/${id}`, pet)
  }
  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">UPDATE PET</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/home" class="btn btn-outline-success" type="submit">
              Back
            </Link>
          </form>
        </div>
      </nav>
      <div className="container mt-5">
        <form class="row g-3 needs-validation" novalidate onSubmit={(e) => petUpdate(e)}>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Owner Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={ownerName}
              name="ownerName"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Pet Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
              value={petName}
              name="petName"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Type of Pet
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={typeOfPet}
              name="typeofPet"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Pet Gender
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={petGender}
              name="petGender"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={address}
              name="address"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Pet Age
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={petAge}
              name="petAge"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Has Vaccine
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={hasVaccine}
              name="hasVaccine"
              onChange={(e) => updatePate (e)}
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Accept
              </label>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
