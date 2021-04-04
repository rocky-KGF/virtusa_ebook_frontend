import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./css/orders.css";

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <Container className="orders">
      <Table
        borderless
        style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
      >
        <thead>
          <Row>
            <td className="col-2">Order ID</td>
            <td className="col-2">User ID</td>
            <td className="col-2">Book ID</td>
            <td className="col-2">Book Name</td>
            <td className="col-2">Quantity</td>
            <td className="col-2">Price</td>
          </Row>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <Row key={idx} className="order-body">
              <td className="col-2">{order["order_id"]}</td>
              <td className="col-2">{order["user_id"]}</td>
              <td className="col-2">{order["book_id"]}</td>
              <td className="col-2">{order["book_name"]}</td>
              <td className="col-2">{order.quantity}</td>
              <td className="col-2">{order.price}</td>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
