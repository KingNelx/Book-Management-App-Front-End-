import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewPets = () => {
  const [pet, setPet] = useState([]);

  const loadAllPets = async () => {
    const result = await axios.get("http://localhost:8080/queryAllPets");
    setPet(result.data);
  };

  useEffect(() => {
    loadAllPets();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Type</th>
            <th scope="col">Address</th>
            <th scope="col">Age</th>
            <th scope="col">Vaccinated</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {pet.map((pets, index) => (
            <tr>
              <th scope="row">1</th>
              <td>{pets.ownerName}</td>
              <td>Otto</td>
              <td>Dog</td>
              <td>@mdo</td>
              <td>3 years</td>
              <td>Yes</td>
              <td>
                <button type="button" className="btn btn-outline-primary">
                  VIEW
                </button>
                <button type="button" className="btn btn-outline-success mx-2">
                  UPDATE
                </button>
                <button type="button" className="btn btn-outline-danger">
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPets;
