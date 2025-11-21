import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import { setSelectedRegion } from "../../features/countries/countriesSlice";
import { selectSelectedRegion } from "../../features/countries/countriesSelectors";

export default function Header() {
  const dispatch = useDispatch();
  const selectedRegion = useSelector(selectSelectedRegion);

  const tabs = ["All", "Asia", "Europe"];

  const handleTabClick = (region) => {
    dispatch(setSelectedRegion(region));
  };

  return (
    <header className="py-4 mt-2">
      <Container className="px-5">
        <Row className="d-flex">
          <Col className="d-flex justify-content-between align-center">
            <h2 className="countries-title fw-bold fs-5">Countries</h2>

            <div className="tabs-container">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`tab-button ${selectedRegion === tab ? "tab-active" : "tab-inactive"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
