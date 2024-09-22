import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faFacebook,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Nguyen Hoang Duy</h5>
            <p>Intern of Program-20</p>
            <p>TMA Innovation Park</p>
            <p>Project: UI of Maverick</p>
          </Col>
          <Col md={4}>
            <h5>More</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/xhoangduy" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /> xhoangduy</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Email: duynguyen2454@gmail.com</p>
            <p>Phone: +84 942322454</p>
            <p>Address: Go Vap, Ho Chi Minh City</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; 2024 Nguyen Hoang Duy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
