import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Stylesheets/GeneralStylesheet.css';

const RateButton = ({ movie, movieId, userId, user }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRate = () => {
    const url ="http://localhost:5001/api/rate"; 
    const ratingInfo = {
      userId: userId,
      movieId: movieId,
      rating: rating 
    };
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ratingInfo),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Success", data);
    console.log("test", ratingInfo);
    handleClose();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  };


  return (
    <>
      <Button className="Rate-button" variant="light" onClick={handleShow}>
        Rate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate movie: {movie.primaryTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rate from 1 - 10"
                autoFocus
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleRate}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RateButton;