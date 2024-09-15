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
            <h5>Dinh Hoang Dat</h5>
            <p>Intern of Program-20</p>
            <p>TMA Innovation Park</p>
            <p>Project: UI of Maverick</p>
          </Col>
          <Col md={4}>
            <h5>More</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/im.hoangdat/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /> _daylapin</a></li>
              <li><a href="https://www.facebook.com/Logan070707/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" /> pin.vole.3</a></li>
              <li><a href="https://github.com/DinhHoangDatIT" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /> anhnhat110</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Email: 2151053010dat@ou.edu.vn</p>
            <p>Phone: +84 702632513</p>
            <p>Address: Thu Duc, Ho Chi Minh</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; 2024 Dinh Hoang Dat. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
