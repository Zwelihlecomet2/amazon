import React from 'react'
import "./Modal.css";

const Modal = (props) => {
    const { setIsOpen } = props;
  return (
    <div className='modal'>
        <div>
            <div style={modalStyle}>
                <h3>Test Modal</h3>
                <button onClick={() =>setIsOpen(false)}>Close</button>
                <p>This is a Simple Modal</p>
            </div>
        </div>
    </div>
  )
}

const modalStyle ={
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "white",
    borderRadius: "24px",
    boxShadow: 24,
    padding: "10px",
    textAlign: "center"
}

export default Modal