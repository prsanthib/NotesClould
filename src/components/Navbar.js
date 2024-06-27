
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from './Modal';

const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showalert("Logged out Successfully", "success");
    navigate("/login");
  };

  const getdetails = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/api/auth/getuser", {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('token')
        },
      });
      const json = await response.json();
      setUserData(json);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUserData(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "beige" }}><b>NotesCloud</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>
          ) : (
            <form className="d-flex">
              <button onClick={getdetails} className="btn btn-primary mx-1"><i className="fa-solid fa-user"></i></button>
              <button onClick={handleLogout} className='btn btn-primary'>LogOut</button>
            </form>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} userData={userData} />
    </nav>
  );
};

export default Navbar;
