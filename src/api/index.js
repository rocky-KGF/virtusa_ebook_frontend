import axios from "axios";
import api from "./api";

export const logIn = async (username, password) => {
  const res = await fetch(api + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      
      return res;
    })
    .catch((err) => ({ error: true }));
    console.log(res)
  return res;
};

export const signUp = async (email, username, mobilenumber, password) => {
  const res = await fetch(api + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      mobilenumber,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => ({ error: true }));
  return res;
};

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("neo-user-token"),
};

export const edit_product = async (product) => {
  const status = await axios
    .post(api + "/admin/productEdit/" + product["book_id"], product, {
      headers: headers,
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const add_Product = async (product) => {
  const status = await axios
    .post(api + "/admin/addProduct", product, {
      headers: headers,
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const delete_product = async (productId) => {
  const status = await axios
    .get(api + "/admin/deleteProduct/" + productId, {
      headers,
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const getAllProducts = async () => {
  const status = await axios
    .get(api + "/home", {
      headers,
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const getAllAdminData = async () => {
  var products, orders;
  await axios
    .all([
      axios.get(api + "/home", { headers }),
      axios.get(api + "/admin/orders"),
    ])
    .then(
      axios.spread((data1, data2) => {
        console.log(data1)
        console.log(data2)
        products = data1;
        orders = data2;
        console.log(products)
        console.log(orders)
      })
    )
    .catch((err) => ({ error: true }));
  return { products, orders };
};

export const logout = () => {
  localStorage.removeItem("neo-user");
  localStorage.removeItem("neo-admin");
  localStorage.removeItem("neo-user-token");
};

export const getAllUserData = async () => {
  var products, cart, orders;
  await axios
    .all([
      axios.get(api + "/home", { headers }),
      axios.get(`${api}/cart/${localStorage.getItem("neo-user-id")}`, {
        headers,
      }),
      axios.get(api + "/orders", { headers }),
    ])
    .then(
      axios.spread((data1, data2, data3) => {
        products = data1;
        cart = data2;
        orders = data3;
      })
    );
  return { products, cart, orders };
};

export const addItemToCart = async (book_id) => {
  const status = await axios
    .post(`${api}/home/${book_id}`, { headers })
    .then((res) => res.data)
    .then((err) => ({ error: true }));
  return status;
};

export const placeDirectOrder = async (book_id) => {
  const order = await axios
    .post(api + "/placeOrder", "", { headers, params: { bid: book_id } })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return order;
};

export const saveOrders = async (cart) => {
  const orders = await axios
    .post(api + "/saveOrder", cart, { headers })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return orders;
};

export const deleteItemFromCart = async (book_id) => {
  const status = await axios
    .post(api + "/cart/delete", "", { headers, params: { bid: book_id } })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};
