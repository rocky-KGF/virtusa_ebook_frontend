import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { logIn, signUp } from "../api";

const Main = () => {
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
  const history = useHistory();

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
    const user = await logIn(username, password);
    if (user.error) alert("Try again later");
    else {
      localStorage.setItem("user", user.user);
      history.push("/home");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(email, username, mobilenumber, password);
  };

  return (
    <Container>
      <Row className="" style={{ height: "100vh" }}>
        <Col sm="12" md="6">
          <img
            style={{ width: "100%" }}
            src="https://images.app.goo.gl/fom5vQ1FV6dLUqeo7"
            alt=""
          />
        </Col>
        <Col
          sm="12"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="log-in-col"
        >
          <img style={logoPic} src="Logo,jpg.png" alt="" />
          <Card style={loginCard}>
            <Card.Title className="text-center">Login to Neo</Card.Title>
            <Card.Body>
              {signIn ? (
                <Form>
                  <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={isPasswordVisible ? "text" : "password"}
                    ></FormControl>
                    <span
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      style={pv}
                      className={
                        "p-v fa " +
                        (isPasswordVisible ? "fa-eye" : "fa-eye-slash")
                      }
                    ></span>
                  </FormGroup>
                  <FormGroup>
                    <button className="signin-btn" onClick={handleSignIn}>
                      Sign In
                    </button>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className="signin-link">
                      <span
                        onClick={() => {
                          setSignIn(false);
                          setIsPasswordVisible(false);
                          setIsConfirmPasswordVisible(false);
                        }}
                      >
                        Create an account
                      </span>
                    </FormLabel>
                  </FormGroup>
                </Form>
              ) : (
                <Form>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl
                      value={mobilenumber}
                      onChange={(e) => setMobilenumber(e.target.value)}
                      type="text"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={isPasswordVisible ? "text" : "password"}
                    ></FormControl>
                    <span
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      style={pv}
                      className={
                        "p-v fa " +
                        (isPasswordVisible ? "fa-eye" : "fa-eye-slash")
                      }
                    ></span>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      type={isConfirmPasswordVisible ? "text" : "password"}
                    ></FormControl>
                    <span
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      style={{
                        color: isConfirmPasswordVisible
                          ? "rgb(255, 30, 0)"
                          : "black",
                      }}
                      className={
                        "p-v fa " +
                        (isConfirmPasswordVisible ? "fa-eye" : "fa-eye-slash")
                      }
                    ></span>
                  </FormGroup>
                  <FormGroup>
                    <button className="signin-btn" onClick={handleSignUp}>
                      Sign Up
                    </button>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className="signin-link">
                      Already a member?{" "}
                      <span
                        onClick={() => {
                          setSignIn(true);
                          setIsPasswordVisible(false);
                          setIsConfirmPasswordVisible(false);
                        }}
                      >
                        Click Here
                      </span>
                    </FormLabel>
                  </FormGroup>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
