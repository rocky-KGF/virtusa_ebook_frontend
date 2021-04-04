import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CartCard from "./CartCard";
import { saveOrders } from "../../api";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const placeOrder = async () => {
    const orders = await saveOrders(cart);
    try {
      if (orders.error) alert("Try again later");
    } catch {
      dispatch({ type: "EMPTY_CART" });
      dispatch({ type: "ADD_ORDERS", payload: orders });
    }
  };

  return (
    <Container>
      {cart.map((item, idx) => (
        <Row key={idx} className="product-card">
          <CartCard Product={item} />
        </Row>
      ))}
      <Row>
        <Col>
          <button className="save-order" onClick={placeOrder}>
            Place Order
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
