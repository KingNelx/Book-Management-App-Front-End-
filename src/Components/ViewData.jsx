import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewData = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    loadAllPets();
  }, []);

  const loadAllPets = async () => {
    const result = await axios.get("http://localhost:8080/api/getAllPets");
    setPets(result.data);
  };

  return (
    <div className="container mt-5">
      {pets.length > 0 ? (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Owner Name</th>
              <th scope="col">PetName</th>
              <th scope="col">Owner Age</th>
              <th scope="col">Pet Age</th>
              <th scope="col">Address</th>
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
                <td>{pet.ownerAge}</td>
                <td>{pet.petAge}</td>
                <td>{pet.address}</td>
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
