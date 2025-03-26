import { ShoppingCart } from "lucide-react"
import { useBookContext } from "../context/BookContext"

function Header({ onCartClick }) {
  const { cartItemCount } = useBookContext()

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">BookShop</div>
        <button
          onClick={onCartClick}
          className="relative p-2 rounded-full hover:bg-gray-100"
          aria-label="Shopping cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header

