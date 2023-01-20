import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const AllFish = () => {

    const [fish, setFish] = useState([])

    useEffect(() => {
        getAllFish()
    }, [])

    const getAllFish = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllFish")
        setFish(result.data)
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Fish</h2>
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
                        fish.map((fishes, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default AllFish;