import { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function AddModal({ habits, setHabits }) {
  const [show, setShow] = useState(false);
  const [habit, setHabit] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (habit) {
      const newHabit = [
        ...habits,
        {
          _id: uuid(),
          habit,
          completed: false,
        }
      ]
      setHabits(newHabit);
      localStorage.setItem("habits", JSON.stringify(newHabit));
      setShow(false);
      setHabit("");
    }
  };

  return (
    <>
      <button onClick={handleShow} className="Habit-add-btn" id="habit-add-btn">
        Add
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Habit"
              onChange={(e) => {
                setHabit(e.target.value);
              }}
              value={habit}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;