import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { getAllAdminData, getAllUserData, logIn, signUp } from "../api";
import { updateUser } from "../redux/actions/user";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { uploadOrders } from "../redux/actions/orders";

const Main = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState();
  const [confirmpassword, setConfirmpassword] = useState("");
  const [signIn, setSignIn] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  );
  const dispatch = useDispatch();

  const pv = {
    color: isPasswordVisible ? "rgb(255, 30, 0)" : "black",
  };

  const logoPic = {
    height: "50%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const loginCard = {
    border: "none",
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password.length < 3) {
      alert("Password should contain at least 3 characters.");
      return;
    }
    const res = await logIn(username, password);
    if (res.error) alert("Try again later");
    else {
      if (res.status) {
        localStorage.setItem("neo-user", res.user);
        localStorage.setItem("neo-user-id", res.id);
        localStorage.setItem("neo-user-token", res.token);
        var data;
        if (res.admin) {
          localStorage.setItem("neo-admin", "true");
          data = await getAllAdminData();
        } else {
          data = await getAllUserData();
          dispatch({ type: "FILL_CART", payload: data.cart.data });
        }
        dispatch({ type: "GET_PRODUCTS", payload: data.products.data });
        console.log(data.products.data)
        dispatch(uploadOrders(data.orders.data));
        dispatch(updateUser(res.user));
        history.push("/");
      } else {
        alert("Username or Password is incorrect");
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.length < 3) {
      alert("Password should contain at least 3 characters.");
      return;
    }
    if (confirmpassword !== password)
      alert("Password and Cofirm Password should be same.");
    else if (mobilenumber.length !== 10 || mobilenumber[0] === 0)
      alert("Enter a valid mobile number.");
    else {
      const res = await signUp(email, username, mobilenumber, password);
      if (res.status==="success") alert("Account has been successfully created!");
      else if (res.err === "username") alert("Username is already taken");
      else if (res.err === "email")
        alert("An account exists with the given email.");
    }
  };

  return (
    <div className='container fluid'>
      <Row className="fluid" style={{ height: "100vh" }}>
        <Col sm="12" md="7" className="back-div">
          <img
            className="background-img"
            src="http://localhost:3000/BackgoundImg.jpg"
            alt=""
          />
        </Col>
        <Col
          sm="12"
          md="5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="log-in-col"
        >
          <img style={logoPic} src="Logo,jpg.png" alt="" />
          <Card style={loginCard}>
            <Card.Title className="text-center">{signIn ? "Login" : "Welcome"} to Neo</Card.Title>
            <Card.Body>
              {signIn ? (
                <Login
                  {...{
                    username,
                    password,
                    setSignIn,
                    setUsername,
                    setPassword,
                    pv,
                    isPasswordVisible,
                    setIsConfirmPasswordVisible,
                    setIsPasswordVisible,
                    handleSignIn,
                  }}
                />
              ) : (
                <Signup
                  {...{
                    email,
                    username,
                    password,
                    confirmpassword,
                    setSignIn,
                    setEmail,
                    setUsername,
                    setMobilenumber,
                    setPassword,
                    setConfirmpassword,
                    pv,
                    isPasswordVisible,
                    isConfirmPasswordVisible,
                    setIsConfirmPasswordVisible,
                    setIsPasswordVisible,
                    handleSignUp,
                  }}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
