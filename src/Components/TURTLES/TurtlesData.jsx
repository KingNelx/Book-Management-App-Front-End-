import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TurtlesData = () => {
  const [turtles, setTurtle] = useState([]);

  const loadAllTurtles = async () => {
    const result = await axios.get("http://localhost:8080/queryAllTurtles");
    setTurtle(result.data);
  };

  useEffect(() => {
    loadAllTurtles();
  }, []);

  return (
    <div className="container mt-5 text-center">
      {turtles.length > 0 ? (
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
            {turtles.map((turtle, index) => (
              <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{turtle.ownerName}</td>
                <td>{turtle.petName}</td>
                <td>{turtle.petGender}</td>
                <td>{turtle.petAge}</td>
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

export default TurtlesData;
