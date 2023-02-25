import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"

const RabbitsData = () => {
  const [rabbits, setRabbits] = useState([]);

  useEffect( () => {

  }, [])

  return (
    <div className="container mt-5 text-center">
      {rabbits.length > 0 ? (
        <table class="table table-hover">
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
        <p> NO DATA FOUND </p>
      )}
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default RabbitsData;
