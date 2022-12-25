const PetsTable = () => {
    return (
        <div>
            <button type="button" class="btn btn-outline-primary mt-5 mx-5">Register a Pet</button>
            <section className="container mt-5">
                <table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pet Name</th>
                            <th scope="col">Pet Owner</th>
                            <th scope="col">Type of Pet</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                            <button type="button" class="btn btn-outline-primary">View</button>
                            <button type="button" class="btn btn-outline-success mx-2">Update</button>
                            <button type="button" class="btn btn-outline-danger">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default PetsTable;