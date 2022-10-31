import { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../firebase/UserContext";

const Register = () => {
  const { SignUp } = useContext(AuthContext);

  const handelSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password, name);

    SignUp(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        from.reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <Form
      onSubmit={handelSubmit}
      className="w-50 mt-5 bg-dark p-4 rounded m-auto "
    >
      <h1 className=" text-center text-white p-2">Sign Up </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="name" placeholder="Enter Name " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" name="password" placeholder="Password " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="warning" type="submit">
        Sing Up
      </Button>
    </Form>
  );
};

export default Register;
