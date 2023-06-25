import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const Room = ({ room, fromDate, toDate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container bs">
      <div className="row">
        <div className="col-md-4">
          <img src={room.imageurls[0]} className="smallimg" />
        </div>
        <div className="col-md-7 text-start">
          <h1>{room.name}</h1>
          <b>
            <p>Max count: {room.maxCount}</p>
            <p>Phone Number: {room.phoneNumber}</p>
            <p>Type: {room.type}</p>
          </b>
          <div style={{ float: "right" }}>
            {fromDate && toDate && (
              <a
                className="btn btn-primary"
                href={`/book/${room._id}/${fromDate}/${toDate}`}
              >
                Book Now
              </a>
            )}

            <button className="btn btn-primary" onClick={handleShow}>
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* ================================== MODAL */}

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
