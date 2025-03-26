import { useBookContext } from "../context/BookContext"
import BookItem from "./BookItem"

function BookList() {
  const { books } = useBookContext()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
