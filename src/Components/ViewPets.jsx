
const ViewPets = () => {
  return (
    <div className="container mt-5 text-center">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Type</th>
            <th scope="col">Address</th>
            <th scope="col">Age</th>
            <th scope="col">Vaccinated</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Dog</td>
            <td>@mdo</td>
            <td>3 years</td>
            <td>Yes</td>
            <td>
              <button type="button" className="btn btn-outline-primary">VIEW</button>
              <button type="button" className="btn btn-outline-success mx-2">UPDATE</button>
              <button type="button" className="btn btn-outline-danger">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewPets;
