import { Minus, Plus, X } from "lucide-react";
import { useBookContext } from "../context/BookContext";

function Cart({ onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useBookContext();

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-center py-8 text-gray-500">Your cart is empty</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="divide-y">
        {cart.map((item) => (
          <div key={item.id} className="py-4 flex items-center">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-16 h-20 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">by {item.author}</p>
              <p className="text-blue-600 font-medium">
              ₹{item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="mx-2 w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
          Checkout
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 bg-gray-200 hover:bg-gray-300 py-2 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Cart;
