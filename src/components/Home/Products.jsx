import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      {products.map((Product, idx) => (
        <Row key={idx} className="product-card">
          <ProductCard Product={Product} />
        </Row>
      ))}
    </Container>
  );
};

export default Products;
