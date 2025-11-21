import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";
import GoogleIcon from "../../assets/icons/google.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import Person from "../../assets/images/person.png";
import { validatePassword, validateRequired } from "../../utils/validation";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const newErrors = {};

    const emailError = validateRequired(formData.email, "Username or email");
    if (emailError) {
      newErrors.email = emailError;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="min-vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-form-wrapper">
            <h1 className="mb-4">Sign In</h1>

            <p className="mb-4 fs-6 fw-semibold">
              New user? {""}
              <a href="/create-account" className="text-primary text-decoration-none">
                Create an account
              </a>
            </p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Username or email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="checkbox">
                <Form.Check type="checkbox" label="Keep me signed in" className="custom-checkbox" />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 mb-4 sign-in-btn">
                Sign In
              </Button>
            </Form>

            <div className="divider mb-4">
              <span>Or Sign In With</span>
            </div>

            <div className="social-login-buttons d-flex justify-content-center gap-3">
              <Button variant="outline-secondary" className="social-btn rounded-circle">
                <img src={GoogleIcon} alt="Google" />
              </Button>
              <Button variant="outline-secondary" className="social-btn rounded-circle">
                <img src={FacebookIcon} alt="Facebook" />
              </Button>
              <Button variant="outline-secondary" className="social-btn rounded-circle">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </Button>
              <Button variant="outline-secondary" className="social-btn rounded-circle">
                <img src={TwitterIcon} alt="Twitter" />
              </Button>
            </div>
          </div>
        </Col>

        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
          <div className="illustration-wrapper">
            <div className="walking-person-illustration">
              <img src={Person} alt="Walking Person" className="illustration-image" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
