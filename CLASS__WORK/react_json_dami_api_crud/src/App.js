import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [user, SetUser] = useState([]);
  const [show, setShow] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [Editshow, setEditShow] = useState(false);
  const [EditId, SetEditId] = useState("");
  const [Editname, SetEditName] = useState("");
  const [Editemail, SetEditEmail] = useState("");
  const [Editphone, SetEditPhone] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => SetUser(data));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      })
    })
      .then((res) => res.json())
      .then((data) =>
        SetUser([
          ...user,
          {
            id: user.length + 1,
            name: name,
            email: email,
            phone: phone
          }
        ])
      );

    setShow(false);
    SetName("");
    SetEmail("");
    SetPhone("");
  };

  const handleDelete = (id) => {
    alert("Are You Sure...!");
    SetUser(user.filter((el) => el.id !== id));
  };

  const handleEditClose = () => setEditShow(false);

  const handleEditShow = (id, name, email, phone) => {
    setEditShow(true);
    SetEditId(id);
    SetEditName(name);
    SetEditEmail(email);
    SetEditPhone(phone);
  };

  const handleEditSave = () => {
    SetUser(
      user.map((el) =>
        el.id == EditId
          ? { ...el, name: Editname, email: Editemail, phone: Editphone }
          : el
      )
    );
    setEditShow(false);
  };

  return (
    <div className='App'>
      <h1 className='bg-light'>React Dami-API CRUD</h1>
      <div className="container">
        <button className='btn-lg btn btn-warning m-4' onClick={handleShow}>
          Add Data
        </button>
        <table className='table'>
          <thead className="table-dark">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {user.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                  <button
                    className='btn btn-primary me-2'
                    onClick={() =>
                      handleEditShow(val.id, val.name, val.email, val.phone)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(val.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="xyz"
                autoFocus
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+91-1234567890"
                value={phone}
                onChange={(e) => SetPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={Editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Id"
                value={EditId}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="xyz"
                value={Editname}
                onChange={(e) => SetEditName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={Editemail}
                onChange={(e) => SetEditEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+91-1234567890"
                value={Editphone}
                onChange={(e) => SetEditPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEditSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
