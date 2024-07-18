import BooksSingleCard from "./BooksSingleCard"

const BooksCard = ({books}) => {
    return (
        <h1 className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => {
                return(<BooksSingleCard key={item._id} book={item}/>)
            })}
        </h1>
    )
}
export default BooksCard