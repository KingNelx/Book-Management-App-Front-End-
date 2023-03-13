import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BirdsData = () => {
  const [birds, setBirds] = useState([]);
  const loadAllBirds = async () => {
    const result = await axios.get("http://localhost:8080/api/bird");
    setBirds(result.data);
  };
  useEffect(() => {
    loadAllBirds();
  }, []);

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of Birds</a>
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
        {birds.length > 0 ? (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p> NO DATA FOUND</p>
        )}
        <Link to="/others">Go Back</Link>
      </section>
    </div>
  );
};

export default BirdsData;
