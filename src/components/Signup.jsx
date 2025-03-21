import React, { useState, } from 'react';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { userNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, phoneValidation } from "./Validation";
// import axios from 'axios';
 
const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
 
    // useEffect(() => {
    //     axios.get('/personsDetails')
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, [])
 
    const onField = [
        { id: "email", title: "Email", type: "text", placeholder: "Enter email" },
        { id: "username", title: "Username", type: "text", placeholder: "Enter username" },
        { id: "name", title: "Name", type: "text", placeholder: "Enter name" },
        { id: "password", title: "Password", type: "password", placeholder: "Enter password" },
        { id: "confirmPassword", title: "Confirm Password", type: "password", placeholder: "Confirm password" },
        { id: "phone", title: "Phone", type: "tel", placeholder: "Enter phone number" }
    ];
 
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };
 
    const validateForm = () => {
        let errorsCopy = {};
 
        const usernameCheck = userNameValidation(formData.username);
        if (!usernameCheck.isValid) errorsCopy.username = usernameCheck.message;
 
        const emailCheck = emailValidation(formData.email);
        if (!emailCheck.isValid) errorsCopy.email = emailCheck.message;
 
        const passwordCheck = passwordValidation(formData.password);
        if (!passwordCheck.isValid) errorsCopy.password = passwordCheck.message;
 
        const confirmPasswordCheck = confirmPasswordValidation(formData.confirmPassword, formData.password);
        if (!confirmPasswordCheck.isValid) errorsCopy.confirmPassword = confirmPasswordCheck.message;
 
        const phoneCheck = phoneValidation(formData.phone);
        if (!phoneCheck.isValid) errorsCopy.phone = phoneCheck.message;
 
        setErrors(errorsCopy);
        return Object.keys(errorsCopy).length === 0;
    };
 
    const onSignup = () => {
        if (!validateForm()) return;
 
        alert("Signup successful! Please log in.");
        navigate("/login");
    };
 
    return (
        <div className="container mt-5">
            <h2>Signup</h2>
 
            {onField.map(({ type, placeholder, id, title }) => (
                <Input
                    key={id}
                    id={id}
                    title={title}
                    type={type}
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={handleChange}
                    error={errors[id]}
                />
               
            ))}
 
            <button className='btn btn-primary mt-3' onClick={onSignup}>Signup</button>
            <p className="mt-2">
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => navigate("/login")}>Login</button>
            </p>
        </div>
    );
};
 
export default Signup;
 
 