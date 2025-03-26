import { createContext, useContext, useState } from "react";

// Sample book data
const books = [
  {
    id: 1,
    title: "The Shadow Lines",
    author: "Amitav Ghosh",
    price: 499,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A novel exploring memory, nationalism, and the blurred boundaries between personal and historical events.",
  },
  {
    id: 2,
    title: "Ghachar Ghochar",
    author: "Vivek Shanbhag",
    price: 379,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A gripping Kannada novel (translated into English) about the transformations that wealth brings to a middle-class Indian family.",
  },
  {
    id: 3,
    title: "Cobalt Blue",
    author: "Sachin Kundalkar",
    price: 265,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A poignant novel about love, loss, and desire in a traditional Maharashtrian family.",
  },
  {
    id: 4,
    title: "The Hungry Tide",
    author: "Amitav Ghosh",
    price: 326,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A novel set in the Sundarbans, weaving together themes of ecology, displacement, and human resilience.",
  },
  {
    id: 5,
    title: "The White Tiger",
    author: "Aravind Adiga",
    price: 289,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A darkly satirical novel about ambition and corruption in modern India.",
  },
  {
    id: 6,
    title: "Latitudes of Longing",
    author: "Shubhangi Swarup",
    price: 1130,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A novel that spans generations and geographies, blending magical realism with environmental themes.",
  },
  {
    id: 7,
    title: "The Illicit Happiness of Other People",
    author: "Manu Joseph",
    price: 1419,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A darkly comic novel about a father investigating his son’s mysterious death.",
  },
  {
    id: 8,
    title: "Em and the Big Hoom",
    author: "Jerry Pinto",
    price: 298,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A deeply moving story of a family dealing with a mother’s mental illness in Mumbai.",
  },
  {
    id: 9,
    title: "The Legends of Khasak",
    author: "O.V. Vijayan",
    price: 203,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A surreal novel set in rural Kerala, exploring mythology, philosophy, and human existence.",
  },
  {
    id: 10,
    title: "Tomb of Sand",
    author: "Geetanjali Shree",
    price: 623,
    image: "/placeholder.svg?height=200&width=150",
    description:
      "A Booker Prize-winning novel about an elderly woman’s transformation and journey across borders.",
  },
];

const BookContext = createContext();

export function useBookContext() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add book to cart
  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        // If book already in cart, increase quantity
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new book to cart with quantity 1
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  // Remove book from cart
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  // Update book quantity in cart
  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    books,
    cart,
    cartItemCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
