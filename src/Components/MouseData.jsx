import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MouseData = () => {
  const [mouses, setMouses] = useState([]);
  const loadAllMouses = async () => {
    const result = await axios.get("http://localhost:8080/api/mouse");
    setMouses(result.data);
  };
  useEffect(() => {
    loadAllMouses();
  }, []);

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of Mouse</a>
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
        {mouses.length > 0 ? (
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner name</th>
                <th scope="col">Pet name</th>
                <th scope="col">Pet Gender</th>
                <th scope="col">Pet Age</th>
                <th scope="col">Has Vaccine</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {mouses.map((mouse, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>NO DATA FOUND</p>
        )}
        <Link to="/others">Go Back</Link>
      </section>
    </div>
  );
};

export default MouseData;
