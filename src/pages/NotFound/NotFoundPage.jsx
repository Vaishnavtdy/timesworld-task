import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./notfound.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <Container className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-message">
          The page you are looking for does not exist.
        </p>
        <button onClick={handleGoHome} className="notfound-btn">
          Go to Home
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
