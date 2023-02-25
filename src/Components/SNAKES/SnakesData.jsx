import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SnakesData = () => {
  const [snakes, setSnakes] = useState([]);
  const loadAllSnakes = async () => {
    const result = await axios.get("http://localhost:8080/queryAllSnakes");
    setSnakes(result.data);
  };

  useEffect(() => {
    loadAllSnakes();
  }, []);
  return (
    <div className="container mt-5 text-center">
      {snakes.length > 0 ? (
        <table class="table">
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
            {snakes.map((snake, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{snake.ownerName}</td>
                <td>{snake.petName}</td>
                <td>{snake.petGender}</td>
                <td>{snake.petAge}</td>
                <td>
                  <button className="btn btn-primary"> UPDATE </button>
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

export default SnakesData;
