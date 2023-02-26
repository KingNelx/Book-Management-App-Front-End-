import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CatsData = () => {
  const [cats, setCats] = useState([]);
  const loadAllCats = async () => {
    const result = await axios.get("http://localhost:8080/queryAllCats");
    setCats(result.data);
  };
  useEffect(() => {
    loadAllCats();
  }, []);
  return (
    <div className="container text-center mt-5">
      {cats.length > 0 ? (
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
            {
              cats.map( (cat, index) => (
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{cat.ownerName}</td>
                <td>{cat.petName}</td>
                <td>{cat.petGender}</td>
                <td>{cat.petAge}</td>
                <td>
                <button type="button" class="btn btn-outline-primary">
                    VIEW
                  </button>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      ) : (
        <p> NO DATA FOUND </p>
      )}
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default CatsData;
