import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
 
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
 
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };
 
    const validateForm = () => {
        let errorsCopy = {};
 
        if (!formData.username) errorsCopy.username = "Username is required";
        if (!formData.email) errorsCopy.email = "Email is required";
        if (!formData.password) errorsCopy.password = "Password is required";
        if (formData.password !== formData.confirmPassword) errorsCopy.confirmPassword = "Passwords do not match";
        if (!formData.phone) errorsCopy.phone = "Phone number is required";
 
        setErrors(errorsCopy);
        return Object.keys(errorsCopy).length === 0;
    };
 
    const onSignup = async () => {
        if (!validateForm()) return;
 
        try {
            const response = await axios.post('http://localhost:5000/signup', formData);
            alert(response.data.message);
            navigate("/login"); // Redirect to login page after successful signup
        } catch (error) {
            setErrors({ apiError: error.response.data.message });
        }
    };
 
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h3 className="text-center">Signup</h3>
                <form>
                {['username', 'email', 'name', 'password', 'confirmPassword', 'phone'].map((field) => (
                        <div className="mb-2" key={field}>
                            <input
                                id={field}
                                type={field.includes('password') ? 'password' : 'text'}
                                className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                        </div>
                    ))}
 
                    <button type="button" className="btn btn-primary w-100" onClick={onSignup}>
                        Signup
                    </button>
                </form>
 
                {errors.apiError && <p className="text-danger text-center small mt-2">{errors.apiError}</p>}
 
                <p className="text-center mt-2 small">
                    Already have an account?{" "}
                    <button className="btn btn-link p-0 small" onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};
 
export default Signup;
