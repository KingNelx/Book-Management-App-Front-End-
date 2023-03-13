import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DogsData = () => {
  const [dogs, setDogs] = useState([]);

  const getAllDogs = async () => {
    const result = await axios.get("http://localhost:8080/api/dog");
    setDogs(result.data);
  };
  useEffect(() => {
    getAllDogs();
  }, []);

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of DOGS</a>
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

      <section className="container text-center mt-5">
        {dogs.length > 0 ? (
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner name</th>
                <th scope="col">petName</th>
                <th scope="col">Pet Gender</th>
                <th scope="col">Pet Age</th>
                <th scope="col">Has Vaccine</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {dogs.map((dog, index) => (
              <tbody>
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{dog.ownerName}</td>
                  <td>{dog.petName}</td>
                  <td>{dog.petGender}</td>
                  <td>{dog.petAge}</td>
                  <td>{dog.hasVaccine}</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary">
                      VIEW
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <p>NO DATA FOUND</p>
        )}
        <Link to="/others">Go Back</Link>
      </section>
    </div>
  );
};

export default DogsData;
