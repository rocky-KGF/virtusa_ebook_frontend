import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <Container className="orders">
      <Table
        borderless
        style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
      >
        <thead>
          <tr className="row">
            <td className="col-3">Order ID</td>
            <td className="col-3">Book Name</td>
            <td className="col-3">Quantity</td>
            <td className="col-3">Price</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx} className="row order-body">
              <td className="col-3">{order["order_id"]}</td>
              <td className="col-3">{order["book_name"]}</td>
              <td className="col-3">{order.quantity}</td>
              <td className="col-2">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
