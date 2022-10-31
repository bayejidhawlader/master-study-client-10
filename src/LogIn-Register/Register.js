import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../firebase/UserContext";

const Register = () => {
  const { SignUp, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photoURL = from.PhotoURL.value;
    const password = from.password.value;
    console.log(name, email, password);

    SignUp(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        from.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((errror) => console.error(error));
  };

  return (
    <Form
      onSubmit={handelSubmit}
      className="w-50 mt-5 bg-dark p-4 rounded m-auto "
    >
      <h2 className=" text-center text-white p-2">Sign Up </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="name" placeholder="Enter Name " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="PhotoURL" type="text" placeholder="Photo URL" />
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
