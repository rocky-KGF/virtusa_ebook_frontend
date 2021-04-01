import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <Container>
      <Row>
        <Col sm="2">Order ID</Col>
        <Col sm="2">User ID</Col>
        <Col sm="2">Book ID</Col>
        <Col sm="2">Book Name</Col>
        <Col sm="2">Quantity</Col>
        <Col sm="2">Price</Col>
      </Row>
      {orders.map((order, idx) => (
        <Row key={idx}>
          <Col sm="2">{order["order_id"]}</Col>
          <Col sm="2">{order["user_id"]}</Col>
          <Col sm="2">{order["book_id"]}</Col>
          <Col sm="2">{order["book_name"]}</Col>
          <Col sm="2">{order.quantity}</Col>
          <Col sm="2">{order.price}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default Orders;
