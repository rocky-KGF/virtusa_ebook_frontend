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

const ProductCard = ({ Product }) => {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setQuantity(0);
    setIsOpen(!isOpen);
  };

  const addToCart = () => {
    if (quantity > Product.stock)
      alert("You cannot order quantity more than the available stock");
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
        <div className="purchase">
          <button className="add-to-cart" onClick={toggleModal}>
            <span className="fa fa-shopping-cart"></span>
          </button>
          <button className="place-order">
            <span className="fa fa-trash"></span>
          </button>
        </div>
        <Modal show={isOpen} onHide={toggleModal}>
          <ModalTitle>Add to Cart</ModalTitle>
          <ModalBody>
            <Form className="form">
              <FormGroup>
                <FormLabel>Quantity</FormLabel>
                <FormControl
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <button onClick={() => addToCart()}>Add</button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Col>
    </>
  );
};

export default ProductCard;
