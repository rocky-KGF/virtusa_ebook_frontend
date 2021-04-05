import {
  Col,
  Modal,
  ModalTitle,
  ModalBody,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";
import "./css/userProducts.css";
import { useDispatch } from "react-redux";
import { addItemToCart, getAllProducts, getOrdersOfUser, placeDirectOrder } from "../../api";
import { uploadOrders } from "../../redux/actions/orders";

const ProductCard = ({ Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const toggleModal = () => {
    setQuantity(0);
    setIsOpen(!isOpen);
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (quantity > parseInt(Product.stock))
      alert("You cannot order quantity more than the available stock");
    else {
      console.log("IN ELSE")
      const Order = await placeDirectOrder({
        book_id: Product.book_id,
        book_name: Product.name,
        quantity: quantity,
        price: quantity * parseInt(Product.price),
      });
        if (Order.error===true) alert("Try again later");
       else {
        const orders = await getOrdersOfUser();
        const products = await getAllProducts();
        dispatch({type: "GET_PRODUCTS", payload: products})
        dispatch(uploadOrders(orders));
        alert("Your order has been placed successfully")
      }
    }
    toggleModal();
  };

  const addToCart = async (e) => {
    e.preventDefault();
    if (quantity > parseInt(Product.stock))
      alert("You cannot order quantity more than the available stock");
    else {
      const status = await addItemToCart(Product.book_id, quantity);
      if (status.error) alert("Try again later");
      else
        dispatch({
          type: "ADD_ITEM_TO_CART",
          payload: {
            book_id: Product.book_id,
            book_name: Product.name,
            quantity: quantity,
            price: quantity * parseInt(Product.price),
          },
        });
    }
    toggleModal();
  };

  const addToCartModalOpen = () => {
    setActive("cart");
    toggleModal();
  };

  const placeOrderModalOpen = () => {
    setActive("order");
    toggleModal();
  };

  return (
    <>
      <Col sm="2">
        <img src={Product.imageurl} alt="" className="product-img" />
      </Col>
      <Col sm="8">
        <div className="product-details">
          <p className="product-name">{Product.name}</p>
          <p className="product-author">{Product.author}</p>
          <p className="product-genre">Genre: {Product.genre}</p>
          <p className="product-desc">{Product.description}</p>
          <p className="product-stock">Stock: {Product.stock}</p>
          <p className="product-price">{"Rs. " + Product.price}</p>
        </div>
      </Col>
      <Col sm="2">
        <div className="product-edits">
          <button className="add-to-cart" onClick={addToCartModalOpen}>
            <span className="fa fa-shopping-cart"></span>
          </button>
          <button className="place-order" onClick={placeOrderModalOpen}>
            Place Order
          </button>
        </div>
        <Modal className="admin-modal" show={isOpen} onHide={toggleModal}>
          <ModalTitle>
            {active === "cart" ? "Add to Cart" : "Place Order"}
          </ModalTitle>
          <ModalBody>
            <Form
              onSubmit={(e) =>
                active === "cart" ? addToCart(e) : placeOrder(e)
              }
              className="form"
            >
              <FormGroup>
                <FormLabel>Quantity</FormLabel>
                <FormControl
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(e.target.value)}
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <button type="submit">
                  {active === "cart" ? "Add" : "Place Order"}
                </button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Col>
    </>
  );
};

export default ProductCard;
