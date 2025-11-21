import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

export default function CountriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [0, 1, 2];

  const countries = [
    { name: "Afghanistan", region: "Asia" },
    { name: "Albania", region: "Europe" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Container className="">
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
          <Col md={4} className="order-0 order-md-1">
            <div className="carousel-content">
              <div className="icon-box">
                <div className="triangle"></div>
                <div className="shapes-row">
                  <div className="square"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={8} className="order-1 order-md-0 mt-3 mt-md-0">
            <div className="carousel-content">
              <div>
                <div className="icon-box">
                  <div className="triangle"></div>
                  <div className="shapes-row">
                    <div className="square"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              </div>

              <div className="carousel-controls">
                <button onClick={handlePrevSlide} className="arrow-button">
                  ←
                </button>
                <div className="dots-container">
                  {slides?.map((i) => (
                    <div
                      key={i}
                      className={`dot ${currentSlide === i ? "dot-active" : "dot-inactive"}`}
                      onClick={() => setCurrentSlide(i)}
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

        <Row>
          {countries?.map((country, idx) => (
            <Col md={6} className="mb-4" key={idx}>
              <div className="country-card">
                <div className="country-icon-container">
                  <div className="country-icon"></div>
                </div>
                <div>
                  <div className="country-name fw-semibold fs-5">{country.name}</div>
                  <div className="country-region fw-light fs-6 lh-sm">{country.region}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          <Col className="text-center mb-5">
            <button className="load-more-button">Load more</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
