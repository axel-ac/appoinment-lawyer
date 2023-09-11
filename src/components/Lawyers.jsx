import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Lawyers = ({ lawyers }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(50,10,200)" }}>
        World Lawyers
      </h3>
      <Row className="justify-content-center">
        {lawyers.map((lw) => (
        <Col  key={lw.id} xs={6} sm={4} md={3} >
            <img src={lw.img} alt={lw.img} className="img-thumbnail lawyer-img" />
            <h5>{lw.name}</h5>
            <h6>{lw.dep}</h6>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Lawyers;