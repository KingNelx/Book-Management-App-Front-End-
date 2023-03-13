import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CatsData = () => {
  const [cats, setCats] = useState([]);
  const loadAllCats = async () => {
    const result = await axios.get("http://localhost:8080/api/cat");
    setCats(result.data);
  };
  useEffect(() => {
    loadAllCats();
  }, []);

  return (
    <div>
      <nav class="navbar bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand">List of Cats</a>
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
        {cats.length > 0 ? (
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
              {cats.map((cat, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{cat.ownerName}</td>
                  <td>{cat.petName}</td>
                  <td>{cat.petGender}</td>
                  <td>{cat.petAge}</td>
                  <td>{cat.hasVaccine}</td>
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

export default CatsData;
