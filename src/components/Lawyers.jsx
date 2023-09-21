import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";

const Lawyers = ({ lawyers, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedLwName, setselectedLwName] = useState("");
  console.log(selectedLwName);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const handleClick = (lwname) => {
    handleShow()
    setselectedLwName(lwname);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(50,10,200)" }}>
        World Lawyers
      </h3>
      <Row className="justify-content-center">
        {lawyers.map((lw, index) => (
          <Col key={index} xs={6} sm={4} md={3}>
            <img
              src={lw.img}
              alt={lw.name}
              className="img-thumbnail lawyer-img"
              onClick={() => handleClick(lw.name)}
            />
            <h5>{lw.name}</h5>
            <h6>{lw.dep}</h6>
          </Col>
        ))}
      </Row>
      {/* <AddModal show={show} handleClose={handleClose} /> */}
      <AddModal
        show={show}
        handleClose={handleClose}
        lwName={selectedLwName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Lawyers;
