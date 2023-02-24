import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BirdsData = () => {
  const [birds, setBirds] = useState([]);
  const loadAllBirds = async () => {
    const result = await axios.get("http://localhost:8080/queryAllBirds");
    setBirds(result.data);
  };

  useEffect(() => {
    loadAllBirds();
  }, []);
  return (
    <div className="container mt-5 text-center">
      {birds.length > 0 ? (
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Pet Gender</th>
              <th scope="col">Pet Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {birds.map((bird, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{bird.ownerName}</td>
                <td>{bird.petName}</td>
                <td>{bird.petGender}</td>
                <td>{bird.petAge}</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    VIEW
                  </button>
                  <button type="button" class="btn btn-outline-success mx-2">
                    UPDATE
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> No Data Found </p>
      )}
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default BirdsData;
