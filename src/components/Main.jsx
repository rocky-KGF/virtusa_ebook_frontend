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

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState();
  const [confirmpassword, setConfirmpassword] = useState("");
  const [signIn, setSignIn] = useState(false);

  const logoPic = {
    height: "50%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const loginCard = {
    border: "none",
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
        >
          <img style={logoPic} src="Logo,jpg.png" alt="" />
          <Card style={loginCard}>
            <Card.Title style={{ marginTop: "5%" }} className="text-center">
              Login to Neo
            </Card.Title>
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
                      type="password"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <button className="signin-btn">Sign In</button>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel style={{ marginLeft: "auto" }}>
                      New to Neo Store?{" "}
                      <span
                        className="signin-link"
                        onClick={() => setSignIn(false)}
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
                      type="password"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      type="password"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <button className="signin-btn">Sign Up</button>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className="text-center">
                      Already a member?{" "}
                      <span
                        className="signin-link"
                        onClick={() => setSignIn(true)}
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
