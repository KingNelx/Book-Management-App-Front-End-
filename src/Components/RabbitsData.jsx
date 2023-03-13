import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RabbitsData = () => {
  const [rabbits, setRabbits] = useState([]);

  const loadAllRabbits = async () => {
    const result = await axios.get();
    setRabbits(result.data);
  };

  useEffect(() => {
    loadAllRabbits();
  }, []);

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of Rabbits</a>
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

      <section className="text-center mt-5">
        {rabbits.length > 0 ? (
          <table class="table">
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
              {rabbits.map((rabbit, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{rabbit.ownerName}</td>
                  <td>{rabbit.petName}</td>
                  <td>{rabbit.petGender}</td>
                  <td>{rabbit.petAge}</td>
                  <td>{rabbit.hasVaccine}</td>
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
        <Link to="/others"> Go Back </Link>
      </section>
    </div>
  );
};

export default RabbitsData;
