import { useState, useEffect } from "react"
import axios from "axios"


const ViewData = () => {


    const [books, setBook] = useState([])

    const loadAllBooks = async () => {
        const result = await axios.get("http://localhost:8080/api/book/getAllBooks")
        setBook(result.data);
    }

    useEffect(() => {
        loadAllBooks();
    }, [])


    return (
        <div className="container mt-5">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book</th>
                        <th scope="col">Author</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.firstName}</td>
                                <td>{book.genre}</td>
                                <td>
                                <button type="button" class="btn btn-outline-primary">VIEW</button>
                                <button type="button" class="btn btn-outline-danger mx-2">DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ViewData;