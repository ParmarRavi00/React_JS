import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

function App() {

  const [Details, setDetails] = useState();
  const [show, setShow] = useState(false);
  const [name, setname] = useState();
  const [email, setemail] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setDetails(data))
  }, [])
  const handelSubmit = () => {


    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name, email: email })
    }).then((res) => res.json()).then((data) => setDetails([...Details, {
      id: Details.length + 1,
      name: name,
      email: email
    }]));
    setname("");
    setemail("");
    setShow(false);
  }


  return (
    <>
      <h1 className='text-center'>
        dummy api crud
      </h1>
      <Button variant="primary" className='d-block m-auto btn-lg' onClick={handleShow}>
        Add User
      </Button>
      <table className="table table-striped">
        <thead>
          <tr className='text-center'>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Details && Details.map((el, i) => (
              <tr key={i} className='text-center'>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <div className="col-4 d-flex m-auto">
                    <button className='btn btn-danger me-3'>
                      Delete
                    </button>
                    <button className='btn btn-success'>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }

        </tbody>

      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={handelSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
