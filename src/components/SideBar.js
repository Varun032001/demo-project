// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link } from "react-router-dom";
// import { FaBars, FaUser } from "react-icons/fa";
// import axios from 'axios';
// import Sidebar from './SideBar'; // Import Sidebar

// const Home = () => {
//     const navigate = useNavigate();
//     const [showProfile, setShowProfile] = useState(false);
//     const [user, setUser] = useState(null);
//     const [sessionTimer, setSessionTimer] = useState(null);

//     const logoutUser = useCallback(async () => {
//         try {
//             await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("userRole");
//         navigate("/login");
//     }, [navigate]);

//     const startSessionTimer = useCallback(() => {
//         if (sessionTimer) clearTimeout(sessionTimer);

//         const timer = setTimeout(() => {
//             alert("Session expired. Please login again.");
//             logoutUser();
//         }, 2 * 60 * 1000);

//         setSessionTimer(timer);
//     }, [logoutUser, sessionTimer]);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/profile", { withCredentials: true });

//                 if (response.data.success) {
//                     setUser(response.data.user);
//                     startSessionTimer();
//                 } else {
//                     logoutUser();
//                 }
//             } catch (error) {
//                 logoutUser();
//             }
//         };

//         fetchUserData();
//     }, [logoutUser, startSessionTimer]);

//     useEffect(() => {
//         return () => clearTimeout(sessionTimer);
//     }, [sessionTimer]);

//     return (
//         <div className="d-flex">
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content */}
//             <div className="flex-grow-1">
//                 {/* Navbar */}
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
//                     <div className="container">
//                         <Link className="navbar-brand" to="/home">MyApp</Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <button className="btn btn-primary me-3" onClick={() => setShowProfile(!showProfile)}>
//                                         <FaUser size={24} /> Profile
//                                     </button>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <button className="btn btn-light dropdown-toggle d-flex align-items-center" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                                         <FaBars size={24} className="me-2" /> Menu
//                                     </button>
//                                     <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="menuDropdown">
//                                         <li><button className="dropdown-item" onClick={() => navigate("/home")}>Home</button></li>
//                                         <li><button className="dropdown-item" onClick={() => navigate("/aboutus")}>About Us</button></li>
//                                         <li><button className="dropdown-item text-danger" onClick={logoutUser}>Logout</button></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//                 {/* Profile Info */}
//                 {showProfile && user && (
//                     <div className="container mt-3">
//                         <div className="card p-3">
//                             <h5 className="card-title">Profile Information</h5>
//                             <p><strong>Username:</strong> {user.username}</p>
//                             <p><strong>Email:</strong> {user.email}</p>
//                             <p><strong>Phone:</strong> {user.phone}</p>
//                         </div>
//                     </div>
//                 )}

//                 {/* Home Page Content */}
//                 <div className="container mt-4">
//                     <h2>Welcome to the College Management!</h2>
//                     <p>This is the main page after login.</p>
//                 </div>

//                 {/* Footer */}
//                 <footer className="bg-dark text-light text-bottom py-3 mt-4">
//                     <div className="container">
//                         <p className="mb-0">&copy; 2025 MyApp. All Rights Reserved.</p>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     );
// };

// export default Home;


// import React, { useState } from 'react';
// import { FaHome, FaInfoCircle, FaUsers, FaBars, FaTimes } from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";

// const SideBar = ({ setActiveSection }) => {
//     const [isOpen, setIsOpen] = useState(true);
//     const [showRolesDropdown, setShowRolesDropdown] = useState(false);

//     return (
//         <div className="d-flex">
//             <div className={`bg-dark text-light p-3 ${isOpen ? 'd-block' : 'd-none'}`} style={{ width: '250px', height: '100vh' }}>
//                 <h4 className="text-center">MyApp</h4>
//                 <ul className="nav flex-column mt-4">
//                     <li className="nav-item">
//                         <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                             onClick={() => setActiveSection('home')}>
//                             <FaHome className="me-2" /> Home
//                         </button>
//                     </li>
//                     <li className="nav-item">
//                         <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                             onClick={() => setActiveSection('about-us')}>
//                             <FaInfoCircle className="me-2" /> About Us
//                         </button>
//                     </li>
//                     <li className="nav-item">
//                         <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                             onClick={() => setShowRolesDropdown(!showRolesDropdown)}>
//                             <FaUsers className="me-2" /> Roles
//                         </button>
//                         {showRolesDropdown && (
//                             <ul className="list-unstyled ms-3">
//                                 <li>
//                                     <button className="nav-link text-light bg-transparent border-0"
//                                         onClick={() => setActiveSection('admin')}>
//                                         Admin
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button className="nav-link text-light bg-transparent border-0"
//                                         onClick={() => setActiveSection('principal')}>
//                                         Principal
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button className="nav-link text-light bg-transparent border-0"
//                                         onClick={() => setActiveSection('student')}>
//                                         Student
//                                     </button>
//                                 </li>
//                             </ul>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//             <button className="btn btn-dark position-fixed top-0 start-0 m-2" onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//         </div>
//     );
// };

// export default SideBar;


// import React, { useState } from 'react';
// import { FaHome, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Roles from './Roles';

// const Sidebar = ({ setActiveSection }) => {
//     const [isOpen, setIsOpen] = useState(true);

//     return (
//         <div className="d-flex">
//             {/* Sidebar */}
//             <div className={`bg-dark text-light p-3 ${isOpen ? 'd-block' : 'd-none'}`} style={{ width: '250px', height: '100vh' }}>
//                 <h4 className="text-center">MyApp</h4>
//                 <ul className="nav flex-column mt-4">
//                     <li className="nav-item">
//                         <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                             onClick={() => setActiveSection('home')}>
//                             <FaHome className="me-2" /> Home
//                         </button>
//                     </li>
//                     <li className="nav-item">
//                         <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                             onClick={() => setActiveSection('about-us')}>
//                             <FaInfoCircle className="me-2" /> About Us
//                         </button>
//                     </li>
//                     <Roles setActiveSection={setActiveSection} />
//                 </ul>
//             </div>
//             {/* Toggle Button */}
//             <button className="btn btn-dark position-fixed top-0 start-0 m-2" onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//         </div>
//     );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDropdown from './Roles'; // <- Updated import
 

const Sidebar = ({ setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="d-flex">
            <div className={`bg-dark text-light p-3 ${isOpen ? 'd-block' : 'd-none'}`} style={{ width: '250px', height: '100vh' }}>
                <h4 className="text-center">MyApp</h4>
                <ul className="nav flex-column mt-4">
                    <li className="nav-item">
                        <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
                            onClick={() => setActiveSection('home')}>
                            <FaHome className="me-2" /> Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
                            onClick={() => setActiveSection('about-us')}>
                            <FaInfoCircle className="me-2" /> About Us
                        </button>
                    </li>
                    <AdminDropdown setActiveSection={setActiveSection} /> {/* New Admin Dropdown */}
                </ul>
            </div>

            {/* Toggle Button */}
            <button className="btn btn-dark position-fixed top-0 start-0 m-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
    );
};

export default Sidebar;
