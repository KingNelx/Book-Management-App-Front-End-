import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";

const DogsData = () => {
  const [dogs, setDogs] = useState([]);
  const loadAllDogs = async () => {
    const result = await axios.get("http://localhost:8080/queryAllDogs");
    setDogs(result.data);
  };

  useEffect(() => {
    loadAllDogs();
  }, []);
  return (
    <div className="container mt-5 text-center">
      {dogs.length > 0 ? (
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
            {dogs.map((dog, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{dog.ownerName}</td>
                <td>{dog.petName}</td>
                <td>{dog.petGender}</td>
                <td>{dog.petAge}</td>
                <td>
                <button type="button" class="btn btn-outline-primary">
                    VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> NO DATA FOUND</p>
      )}
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default DogsData;
