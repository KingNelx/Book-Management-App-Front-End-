import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

const AllBirds = () => {

    const [bird, setBirds] = useState([])
    const getAllBirds = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllBirds")
        setBirds(result.data)
    }

    useEffect(() => {
        getAllBirds()
    }, [])

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
                        bird.map((birds, index) => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{birds.petName}</td>
                                <td>{birds.ownerName}</td>
                                <td>{birds.petAge}</td>
                                <td>
                                    <button type="button" class="btn btn-outline-primary">View</button>
                                    <button type="button" class="btn btn-outline-success mx-2">Update</button>
                                    <button type="button" class="btn btn-outline-danger">Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default AllBirds;