import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import Icon from "../../assets/images/icon.png";
import { fetchCountries } from "../../features/countries/countriesSlice";
import { selectFilteredCountries, selectLoading, selectError } from "../../features/countries/countriesSelectors";

export default function CountriesPage() {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayCount, setDisplayCount] = useState(10);

  const filteredCountries = useSelector(selectFilteredCountries);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const slides = [
    { id: 0, image: Icon },
    { id: 1, image: Icon },
    { id: 2, image: Icon },
  ];

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    setDisplayCount(10);
  }, [filteredCountries]);

  const displayedCountries = filteredCountries.slice(0, displayCount);
  const hasMore = displayCount < filteredCountries.length;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  return (
    <>
      <Container className="px-5">
        <Row>
          <Col className="">
            <div className="welcome-section">
              <div className="line-left"></div>
              <h1 className="welcome-title">WELCOME</h1>
              <div className="line-right"></div>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={3} className="order-0 order-lg-1">
            <div className="carousel-content">
              <img src={Icon} className="" />
            </div>
          </Col>

          <Col lg={9} className="order-1 order-lg-0 mt-3 mt-lg-0">
            <div className="carousel-content">
              <div className="d-flex justify-content-center">
                <img src={slides[currentSlide].image} className="" />
              </div>

              <div className="carousel-controls">
                <button onClick={handlePrevSlide} className="arrow-button">
                  ←
                </button>
                <div className="dots-container">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`dot ${currentSlide === index ? "dot-active" : "dot-inactive"}`}
                      onClick={() => setCurrentSlide(index)}
                    ></div>
                  ))}
                </div>

                <button onClick={handleNextSlide} className="arrow-button">
                  →
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {loading && (
          <Row>
            <Col className="text-center py-5">
              <div className="fs-5">Loading countries...</div>
            </Col>
          </Row>
        )}

        {error && (
          <Row>
            <Col className="text-center py-5">
              <div className="fs-5 text-danger">Error loading countries: {error}</div>
            </Col>
          </Row>
        )}

        {!loading && !error && (
          <>
            <Row>
              {displayedCountries.map((country, idx) => (
                <Col md={6} className="mb-3" key={idx}>
                  <div className="country-card">
                    <div className="country-icon-container">
                      {country.flag ? (
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                        />
                      ) : (
                        <div className="country-icon"></div>
                      )}
                    </div>
                    <div>
                      <div className="country-name fw-semibold fs-5">{country.name}</div>
                      <div className="country-region fw-light fs-6 lh-sm">{country.region}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {hasMore && (
              <Row>
                <Col className="text-center mb-5 mt-2">
                  <button className="load-more-button" onClick={handleLoadMore}>
                    Load more
                  </button>
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </>
  );
}
