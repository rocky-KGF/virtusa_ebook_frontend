import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../api";

const CartCard = ({ Product }) => {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    const status = await deleteItemFromCart(Product.book_id);
    if (status.error) alert("Try again later");
    else dispatch({ type: "DELETE_FROM_CART", payload: Product.book_id });
  };

  return (
    <>
      <Col sm="2">
        <img src={Product.imageurl} alt="" className="product-img" />
      </Col>
      <Col sm="8">
        <div className="product-details">
          <p className="product-name">{Product.book_name}</p>
          <p className="product-stock">Stock: {Product.quantity}</p>
          <p className="product-price">{"Rs. " + Product.price}</p>
        </div>
      </Col>
      <Col sm="2">
        <button className="product-delete" onClick={deleteProduct}>
          <span className="fa fa-trash fa-lg"></span>
        </button>
      </Col>
    </>
  );
};

export default CartCard;
