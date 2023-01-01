import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react";
const AllSnake = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Snakes</h2>
            <table class="table table-striped">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default AllSnake;