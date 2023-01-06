import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

const AllCats = () => {

    const [cat, setCats] = useState([])

    const getAllCats = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllCats")
        setCats(result.data)
    }

    useEffect(() => {
        getAllCats();
    }, [])

    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Cats</h2>
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
                        cat.map((cats, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{cats.petName}</td>
                                <td>{cats.ownerName}</td>
                                <td>{cats.petAge}</td>
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

export default AllCats;