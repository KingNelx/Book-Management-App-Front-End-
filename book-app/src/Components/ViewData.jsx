import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const ViewData = () => {

    const {id} = useParams()

    const [books, setBook] = useState([])

    const loadAllBooksData = async () => {
        const bookData = await axios.get("http://localhost:8080/api/book/getAllBooks")
        setBook(bookData.data);
    }

    const deleteByID = async (id) => {
        await axios.delete(`http://localhost:8080/api/book/deleteBookByID/${id}`)
        alert(" TEST DELETED ")
        window.location.reload()
        loadAllBooksData();
    }



    useEffect(() => {
        loadAllBooksData();
    }, [])


    return (
        <div className="container mt-5">
        {
            books.length > 0 ? (
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book</th>
                            <th scope="col">Date Published</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.bookName}</td>
                                    <td>{book.datePublished}</td>
                                    <td>{book.genre}</td>
                                    <td>
                                         <button type="button" className="btn btn-outline-danger mx-2" onClick={() => deleteByID(book.id)}>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            ) : (
                <p className="text-center">NO DATA</p>
            )
        }
    </div>    
    );
}

export default ViewData;