import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";

export default function Header() {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <header className="pt-4 pb-3">
      <Container>
        <Row className="d-flex">
          <Col className="d-flex justify-content-between align-center">
            <h2 className="countries-title fw-bold fs-5">Countries</h2>

            {/* Your original tabs (unchanged UI) */}
            <div className="tabs-container">
              {["All", "Asia", "Europe"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-button ${activeTab === tab ? "tab-active" : "tab-inactive"}`}
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
