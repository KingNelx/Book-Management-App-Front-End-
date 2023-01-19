import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react";
const AllSnake = () => {

    const [snake, setSnake] = useState([])

    const getAllSnakes = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllSnakes")
        setSnake(result.data)
    }

    useEffect(() => {
        getAllSnakes()
    }, [])

    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Snakes</h2>
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
                        snake.map((snakes, index) => (
                            <tr>
                                <td scope="col" key={index}>{index + 1}</td>
                                <td>{snakes.petName}</td>
                                <td>{snakes.ownerName}</td>
                                <td>{snakes.petAge}</td>
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

export default AllSnake;