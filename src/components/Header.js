import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="danger">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ height: "60px" }}
              src="https://stylemixthemes.com/masterstudy/wp-content/themes/landing/assets/svg/logo.svg"
              alt=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <button className="fs-5 bold rounded me-3 border">
                <Link className="text-decoration-none" to="/blog">
                  Blog
                </Link>
              </button>

              <button className="fs-5 bold rounded me-3 border">
                <Link className="text-decoration-none" to="/faq">
                  FaQ
                </Link>
              </button>

              <button className="fs-5 bold rounded me-3 border">
                <Link className="text-decoration-none" to="/program">
                  Courses
                </Link>
              </button>
            </Nav>
            <Nav>
              {user?.uid ? (
                <button onClick={logOut} className="btn btn-warning">
                  {" "}
                  <Link className="text-decoration-none" to="/">
                    SignOut
                  </Link>{" "}
                </button>
              ) : (
                <div>
                  <button className="btn btn-warning me-1">
                    <Link className="text-decoration-none" to="/signup">
                      Sign Up
                    </Link>
                  </button>
                  <button className="btn btn-warning">
                    <Link className="text-decoration-none" to="/login">
                      Log In
                    </Link>
                  </button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
