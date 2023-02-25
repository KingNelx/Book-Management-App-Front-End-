import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RabbitsData = () => {
  const [rabbits, setRabbits] = useState([]);
  const loadAllRabbits = async () => {
    const result = await axios.get("http://localhost:8080/queryAllRabbits");
    setRabbits(result.data);
  };
  useEffect(() => {
    loadAllRabbits();
  }, []);

  return (
    <div className="container mt-5 text-center">
      {rabbits.length > 0 ? (
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
            {rabbits.map((rabbit, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{rabbit.ownerName}</td>
                <td>{rabbit.petName}</td>
                <td>{rabbit.petGender}</td>
                <td>{rabbit.petAge}</td>
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
        <p> NO DATA FOUND </p>
      )}
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default RabbitsData;
