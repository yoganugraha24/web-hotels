import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">
              Yang biasa ditanyakan
            </h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bagaimana cara pemesanan nya?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Apakah Tempatnya Nyaman?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Apakah Ada Wifi?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1000">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Bagaimana Lingkunagn Di Sekitarnya?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1200">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Sudah Berapa Lama Beroperasi?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1400">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Apakah Sudah Terverifikasi Dengan Baik?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1600">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Berapa Kapasitas Maksimal Penginapan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1800">
            <Accordion>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Apakah Cocok Untuk Anak - Anak?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
