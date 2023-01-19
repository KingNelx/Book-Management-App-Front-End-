import { Link } from "react-router-dom"

const AllFish = () => {

    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Birds</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Pet Owner</th>
                        <th scope="col">Pet Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        <td>
                            <button type="button" class="btn btn-outline-primary">View</button>
                            <button type="button" class="btn btn-outline-success mx-2">Update</button>
                            <button type="button" class="btn btn-outline-danger">Remove</button>
                        </td>
                            
                       
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default AllFish;