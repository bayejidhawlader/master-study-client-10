import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../firebase/UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { SignUp, GoogleProvider, GithubProvider } = useContext(AuthContext);

  const GoogleSignIn = new GoogleAuthProvider();
  const GithubSignIn = new GithubAuthProvider();
  const handelLogIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(email,PhotoURL, password, name);

    SignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        from.reset();

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handelGoogleSingIn = () => {
    GoogleProvider(GoogleSignIn)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handelGithubSingIn = () => {
    GithubProvider(GithubSignIn)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form
      onSubmit={handelLogIn}
      className="w-50 bg-dark mt-5 p-4 rounded m-auto "
    >
      <h1 className="text-white text-center">Log In </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Your email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button className="w-100 mb-3" variant="warning" type="submit">
        Log In
      </Button>
      <button
        onClick={handelGoogleSingIn}
        className="btn btn-outline-warning w-100 mb-3"
      >
        Google
      </button>
      <button
        onClick={handelGithubSingIn}
        className="btn btn-outline-warning w-100"
      >
        Github
      </button>
    </Form>
  );
};

export default Login;
