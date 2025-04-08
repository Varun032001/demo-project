import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const [sessionTimer, setSessionTimer] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const startSessionTimer = () => {
        if (sessionTimer) clearTimeout(sessionTimer);

        const timer = setTimeout(() => {
            alert("Session expired. Please login again.");
            logoutUser();
        }, 2 * 60 * 1000);

        setSessionTimer(timer);
    };

    const logoutUser = async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        } catch (error) {
            console.error("Logout failed", error);
        }

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const onLogin = async () => {
        let errorsCopy = {};
        if (!formData.username) errorsCopy.username = "Username is required";
        if (!formData.password) errorsCopy.password = "Password is required";

        setErrors(errorsCopy);

        if (Object.keys(errorsCopy).length === 0) {
            try {
                const response = await axios.post('http://localhost:5000/login', formData, { withCredentials: true });

                if (response.data.success) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));

                    alert(response.data.message);
                    startSessionTimer();
                    navigate("/home");
                } else {
                    setErrors({ apiError: response.data.message });
                }

            } catch (error) {
                setErrors({ apiError: error.response?.data?.message || "Login failed" });
            }
        }
    };

    useEffect(() => {
        return () => clearTimeout(sessionTimer);
    }, [sessionTimer]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="mb-3">
                        <input
                            id="username"
                            type="text"
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>

                    <div className="mb-3">
                        <input
                            id="password"
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <button type="button" className="btn btn-primary w-100" onClick={onLogin}>
                        Login
                    </button>
                </form>

                {errors.apiError && <p className="text-danger text-center small mt-2">{errors.apiError}</p>}

                <p className="text-center mt-2 small">
                    Don't have an account?{" "}
                    <button className="btn btn-link p-0 small" onClick={() => navigate("/signup")}>
                        Signup
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
