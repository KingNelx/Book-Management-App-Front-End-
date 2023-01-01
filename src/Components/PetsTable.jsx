import { Link } from "react-router-dom";
import Others from "./Others";
import axios from 'axios'
import { useState, useEffect } from "react"

const PetsTable = () => {

    const [pet, setPet] = useState([])

    const getAllPets = async () => {
        const result = await axios.get("http://localhost:8080/pets/getAllPets")
        setPet(result.data)
    }

    useEffect(() => {
        getAllPets()
    }, [])
    return (
        <div>
            <Link to="/registerPet" type="button" class="btn btn-outline-primary mt-5 mx-5">Register a Pet</Link>
            <Others />
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
                        {
                            pet.map((pets, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{pets.petName}</td>
                                    <td>{pets.ownerName}</td>
                                    <td>{pets.typeOfPet}</td>
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
            </section>
        </div>
    );
}

export default PetsTable;