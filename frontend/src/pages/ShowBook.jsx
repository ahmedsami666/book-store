import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spiner from "../components/Spinner"

const ShowBook = () => {
    const [book, setBooK] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const {id} = useParams()

    React.useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/books/${id}`)
            .then((res) => {
                setBooK(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    return (
        <div className="p-4">
            <BackButton /> 
            <h1 className="text-3xl my-4">Show Book</h1>
            {loading ? <Spiner /> :
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Published Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            }
        </div>
    )
}
export default ShowBook