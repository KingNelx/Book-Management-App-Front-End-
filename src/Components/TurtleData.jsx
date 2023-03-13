import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TurtleData = () => {

  const [turtles, setTurtles] = useState([]);

  const loadAllTurtles = async () => {
    const result = await axios.get("http://localhost:8080/api/turtle");
    setTurtles(result.data);
  };

  useEffect(() => {
    loadAllTurtles();
  }, []);
  
  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of Turtles</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <section className="text-center mt-5 container">
        {turtles.length > 0 ? (
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner name</th>
                <th scope="col">Pet Name</th>
                <th scope="col">Pet Gender</th>
                <th scope="col">Pet Age</th>
                <th scope="col">Has Vaccine</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {turtles.map((turtle, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{turtle.ownerName}</td>
                  <td>{turtle.petName}</td>
                  <td>{turtle.petGender}</td>
                  <td>{turtle.petAge}</td>
                  <td>{turtle.hasVaccine}</td>
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
          <p> NO DATA FOUND </p>
        )}
        <Link to="/others">Go Back</Link>
      </section>
    </div>
  );
};

export default TurtleData;
