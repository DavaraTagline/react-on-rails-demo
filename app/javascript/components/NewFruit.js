import React from "react";
import  Button  from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = () => {
    toast("Tostify example!")
};

const NewFruit = (props) => {

    let formFields = {}
    const errors = {};

    return (
        <form className="form-group" onSubmit={(e) => {
            e.preventDefault();
           
            props.handleFormSubmit(
                formFields.name.value,
                formFields.description.value
            );
            e.target.reset();
        }
        }>
            <br />
            <div>
                <Button onClick={showToast}>Show Toast !</Button>
                <ToastContainer />
            </div>
            <div className="form-group col-md-6">
                <input className="form-control" ref={input => formFields.name = input} placeholder='Enter the name of the item' required />

                <input className="form-control" ref={input => formFields.description = input} placeholder='Enter a description' required/>
                <button>Submit</button>
            </div><br />
        </form>
    )
}
export default NewFruit;