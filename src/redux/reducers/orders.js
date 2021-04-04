const temp = [
  {
    order_id: 1,
    user_id: 3,
    book_id: 4,
    quantity: 10,
    book_name: "an old man",
    price: 8000,
  },
];

export const orders = (state = temp, action) => {
  switch (action.type) {
    case "ADD_ORDERS":
      return action.payload;
    default:
      return state;
  }
};
