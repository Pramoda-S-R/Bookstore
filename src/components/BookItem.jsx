import { useBookContext } from "../context/BookContext"

function BookItem({ book }) {
  const { addToCart } = useBookContext()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <p className="text-sm text-gray-700 mb-4 flex-1">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">₹{book.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(book)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookItem

