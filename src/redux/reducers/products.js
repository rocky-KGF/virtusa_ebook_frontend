const temp = [
  {
    book_id: 1,
    name: "fire in the water",
    author: "bhanu",
    stock: "3",
    price: "1000",
    description: "excellent book",
    imageurl: "xyz",
    genre: "thriller",
  },
  {
    book_id: 2,
    name: "destroyed bSK",
    author: "SK & D",
    stock: "4",
    price: "4200",
    description: "A sad story of a friend who got cheated by his own friend.",
    imageurl: "xyz",
    genre: "Emotional & Thriller",
  },
  {
    book_id: 3,
    name: "blue moon sky",
    author: "sampath",
    stock: "17",
    price: "5000",
    description: "super book",
    imageurl: "ddd",
    genre: "horror",
  },
  {
    book_id: 4,
    name: "an old man",
    author: "kalyan",
    stock: "40",
    price: "800",
    description: "average book",
    imageurl: "fff",
    genre: "mystery",
  },
];

export const products = (state = temp, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((product) => {
        if (product.book_id === action.payload.book_id) return action.payload;
        return product;
      });
    case "DELETE_PRODUCT":
      return state.filter(
        (product) => product.book_id !== action.payload.book_id
      );
    default:
      return state;
  }
};
