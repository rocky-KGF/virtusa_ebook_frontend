import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CartCard from "./CartCard";
import { getAllProducts, getOrdersOfUser, saveOrders } from "../../api";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const placeOrder = async () => {
    const status = await saveOrders(cart);
  
      if (status.error) alert("Try again later");
     else {
      const orders = await getOrdersOfUser();
      const products = await getAllProducts();
      dispatch({type: "GET_PRODUCTS", payload: products})
      dispatch({ type: "EMPTY_CART" });
      dispatch({ type: "ADD_ORDERS", payload: orders });
      alert("Your order has been placed successfully")
    }
  };

  var tot_price = 0;
  for(var i of cart) {
    tot_price += i.price;
  }

  return (
    <Container>
      {cart.map((item, idx) => (
        <Row key={idx} className="product-card">
          <CartCard Product={item} />
        </Row>
      ))}
      <Row>
        <Col>
          {tot_price ? "Total price: "+tot_price : "Your cart is empty"}
        </Col>
      </Row>
      {tot_price ? <Row>
        <Col>
          <button className="save-order" onClick={placeOrder}>
            Place Order
          </button>
        </Col>
      </Row> : <></> }
    </Container>
  );
};

export default Cart;
