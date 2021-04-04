import { Navbar, NavbarBrand, Container, Nav, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useHistory } from "react-router";
import { logout } from "../../api";

const Navigation = ({ activeElement, setActiveElement }) => {
  const history = useHistory()
  return (
    <Navbar expand="md" className="bg-info nav-bar" variant="dark">
      <Container>
        <NavbarBrand>Neo Book Store</NavbarBrand>
        <NavbarToggle className="ml-auto" aria-controls="nav-bar" />
        <NavbarCollapse id="nav-bar">
          <Nav className="ml-auto nav-bar-nav">
            <NavLink
              className={
                activeElement === "products" ? "active-nav-link" : "nav-link"
              }
              onClick={() => {
                if (activeElement !== "products") setActiveElement("products");
              }}
            >
              Products
            </NavLink>
            <NavLink
              className={
                activeElement === "cart" ? "active-nav-link" : "nav-link"
              }
              onClick={() => {
                if (activeElement !== "cart") setActiveElement("cart");
              }}
            >
              Cart
            </NavLink>
            <NavLink
              className={
                activeElement === "orders" ? "active-nav-link" : "nav-link"
              }
              onClick={() => {
                if (activeElement !== "orders") setActiveElement("orders");
              }}
            >
              Orders
            </NavLink>
            <NavLink>
              <span className="fa fa-sign-out" onClick={() => {
                logout();
                history.push("/signin");
              }}></span>Log out 
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
