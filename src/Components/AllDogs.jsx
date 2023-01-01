import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"

const AllDogs = () => {

    const [dog, setDogs] = useState([])
    const getAllDogs = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllDogs")
        setDogs(result.data)
    }
    useEffect(() => {
        getAllDogs()
    }, [])
    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Dogs</h2>
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
                        dog.map((dogs, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{dogs.petName}</td>
                                <td>{dogs.ownerName}</td>
                                <td>{dogs.petAge}</td>
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

export default AllDogs;