import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Stylesheets/GeneralStylesheet.css';

const RateButton = ({ movie, movieId, userId, user }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRate = () => {

  const ratingNumber = Number(rating);
  if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 10) {
    setError("The rating must be between 1 and 10");
    return;
  }

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
    handleClose();
    window.location.reload();
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
          <Form onSubmit={(e) => {
            e.preventDefault();
            handleRate();
          }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rate from 1 - 10"
                autoFocus
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
              {error && <div>{error}</div>}
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