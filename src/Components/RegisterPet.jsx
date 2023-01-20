import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const RegisterPet = () => {

    const nav = useNavigate()

    const [myPet, setMyPet] = useState({
        petName: "",
        ownerName: "",
        petAge: "",
        typeOfPet: "",
        petGender: "",
        address: ""
    })

    const { petName, ownerName, petAge, typeOfPet, petGender, address } = myPet

    const onInputChange = (e) => {
        setMyPet({ ...myPet, [e.target.name]: e.target.value })
    }

    const onSubmit = () => {

    }

    return (
        <div className="container mt-5 col-md-4">
            <form>
                <div class="mb-3">
                    <label class="form-label">Pet Name</label>
                    <input type={"text"} class="form-control" name="petName" value={petName} onChange={
                        (e) => onInputChange(e)
                    } />
                </div>

                <div class="mb-3">
                    <label class="form-label">Name of Owner</label>
                    <input type={"text"} class="form-control" name="ownerName" value={ownerName} onChange={
                        (e) => onInputChange(e)
                    } />
                </div>

                <div class="mb-3">
                    <label class="form-label">Pet Age</label>
                    <input type={"text"} class="form-control" name="petAge" value={petAge} onChange={
                        (e) => onInputChange(e)
                    } />
                </div>

                <div class="mb-3">
                    <label class="form-label">Type of Pet</label>
                    <input type={"text"} class="form-control" name="typeOfPet" value={typeOfPet} onChange={
                        (e) => onInputChange(e)
                    } />
                </div>

                <div class="mb-3">
                    <label class="form-label">Pet Gender</label>
                    <input type={"text"} class="form-control" name="petGender" value={petGender} onInput={
                        (e) => onInputChange(e)
                    } />
                </div>

                <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input type={"text"} class="form-control" name="address" value={address} onInput={
                        (e) => onInputChange(e)
                    } />
                </div>

                <button type="button" class="btn btn-outline-primary">Register</button>
                <Link to="/" class="btn btn-danger mx-2"> Back </Link>
            </form>
        </div>
    );
}

export default RegisterPet;