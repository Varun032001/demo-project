// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link } from "react-router-dom";
// import { FaBars, FaUser } from "react-icons/fa";
// import axios from 'axios';

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
//         localStorage.removeItem("user");
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
//         <div>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
//                 <div className="container">
//                     <Link className="navbar-brand" to="/home">MyApp</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <button className="btn btn-primary me-3" onClick={() => setShowProfile(!showProfile)}>
//                                     <FaUser size={24} /> Profile
//                                 </button>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <button className="btn btn-light dropdown-toggle d-flex align-items-center" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                                     <FaBars size={24} className="me-2" /> Menu
//                                 </button>
//                                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="menuDropdown">
//                                     <li><button className="dropdown-item" onClick={() => navigate("/home")}>Home</button></li>
//                                     <li><button className="dropdown-item" onClick={() => navigate("/about us")}>About US</button></li>
//                                     <li><button className="dropdown-item text-danger" onClick={logoutUser}>Logout</button></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Profile Info */}
//             {showProfile && user && (
//                 <div className="container mt-3">
//                     <div className="card p-3">
//                         <h5 className="card-title">Profile Information</h5>
//                         <p><strong>Username:</strong> {user.username}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phone}</p>
//                     </div>
//                 </div>
//             )}

//             {/* Home Page Content */}
//             <div className="container mt-4">
//                 <h2>Welcome to the College Management!</h2>
//                 <p>This is the main page after login.</p>
//             </div>

//             {/* Footer */}
//             <footer className="bg-dark text-light text-bottom py-9 mt-9">
//                 <div className="container">
//                     <p className="mb-0">&copy; 2025 MyApp. All Rights Reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Home;








// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import axios from 'axios';
// import Sidebar from './SideBar';
// import { FaSignOutAlt, FaUser } from 'react-icons/fa';

// const Home = () => {
//     const navigate = useNavigate();
//     const [showProfile, setShowProfile] = useState(false);
//     const [user, setUser] = useState(null);
//     const [sessionTimer, setSessionTimer] = useState(null);
//     const [activeSection,setActiveSection] = useState('home');

//     const logoutUser = useCallback(async () => {
//         try {
//             await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
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
//             <Sidebar setActiveSection={setActiveSection} />
//             <div className="container-fluid mt-4 d-flex flex-column" style={{ flex: 1 }}>
//                 <div className="d-flex justify-content-end align-items-center mb-3">
//                     {user && (
//                         <>
//                             <button className="btn btn-light me-3" onClick={() => setShowProfile(!showProfile)}>
//                                 <FaUser className="me-2" /> Profile
//                             </button>
//                             <button className="btn btn-danger" onClick={logoutUser}>
//                                 <FaSignOutAlt className="me-2" /> Logout
//                             </button>
//                         </>
//                     )}
//                 </div>
//                 {activeSection === 'home' && (
//                     <>
//                         <h2>Welcome to the College Management!</h2>
//                         <p>This is the main page after login.</p>
//                     </>
//                 )}
//                 {activeSection === 'about-us' && <h2>About Us Section</h2>}
//                 {activeSection === 'admin' && <h2>Admin Section</h2>}
//                 {activeSection === 'principal' && <h2>Principal Section</h2>}
//                 {activeSection === 'student' && <h2>Student Section</h2>}
//                 {showProfile && user && (
//                     <div className="card p-3 mt-3" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
//                         <h5 className="card-title">Profile Information</h5>
//                         <p><strong>Username:</strong> {user.username}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phone}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;




// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './SideBar';
// import Admin from './Admin';
// import Principal from './Principal';  // Import Principal component
// import { FaSignOutAlt, FaUser } from 'react-icons/fa';

// const Home = () => {
//     const navigate = useNavigate();
//     const [showProfile, setShowProfile] = useState(false);
//     const [user, setUser] = useState(null);
//     const [sessionTimer, setSessionTimer] = useState(null);
//     const [activeSection, setActiveSection] = useState('home');

//     const logoutUser = useCallback(async () => {
//         try {
//             await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
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
//             <Sidebar setActiveSection={setActiveSection} />
//             <div className="container-fluid mt-4 d-flex flex-column" style={{ flex: 1 }}>
//                 <div className="d-flex justify-content-end align-items-center mb-3">
//                     {user && (
//                         <>
//                             <button className="btn btn-light me-3" onClick={() => setShowProfile(!showProfile)}>
//                                 <FaUser className="me-2" /> Profile
//                             </button>
//                             <button className="btn btn-danger" onClick={logoutUser}>
//                                 <FaSignOutAlt className="me-2" /> Logout
//                             </button>
//                         </>
//                     )}
//                 </div>
                
//                 {/* Dynamic Content Based on Active Section */}
//                 {activeSection === 'home' && <h2>Welcome to the College Management!</h2>}
//                 {activeSection === 'about-us' && <h2>About Us Section</h2>}
//                 {activeSection === 'admin' && <Admin />}
//                 {activeSection === 'principal' && <Principal />} {/* Add Principal component */}
//                 {activeSection === 'student' && <h2>Student Section</h2>}

//                 {/* Profile Card */}
//                 {showProfile && user && (
//                     <div className="card p-3 mt-3" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
//                         <h5 className="card-title">Profile Information</h5>
//                         <p><strong>Username:</strong> {user.username}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phone}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './SideBar';
// import Admin from './Admin';
// import Principal from './Principal';
// import { FaSignOutAlt, FaUser } from 'react-icons/fa';

// const Home = () => {
//     const navigate = useNavigate();
//     const [showProfile, setShowProfile] = useState(false);
//     const [user, setUser] = useState(null);
//     const [sessionTimer, setSessionTimer] = useState(null);
//     const [activeSection, setActiveSection] = useState('home');

//     const logoutUser = useCallback(async () => {
//         try {
//             await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
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
//         <div className="d-flex flex-column" style={{ height: '100vh' }}>
//             {/* Header Section */}
//             <header className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
//                 <div className="flex-grow-1 d-flex justify-content-center">
//                     <h3 className="m-0"> College</h3>
//                 </div>
//                 {user && (
//                     <div className="d-flex align-items-center">
//                         <button className="btn btn-light me-3" onClick={() => setShowProfile(!showProfile)}>
//                             <FaUser className="me-2" /> Profile
//                         </button>
//                         <button className="btn btn-danger" onClick={logoutUser}>
//                             <FaSignOutAlt className="me-2" /> Logout
//                         </button>
//                     </div>
//                 )}
//             </header>

//             <div className="d-flex flex-grow-1">
//                 <Sidebar setActiveSection={setActiveSection} />
//                 <div className="container-fluid mt-4 d-flex flex-column" style={{ flex: 1 }}>
//                     {/* Dynamic Content Based on Active Section */}
//                     {activeSection === 'home' && <h2>Welcome, {user?.username}!</h2>}
//                     {activeSection === 'about-us' && <h2>About Us Section</h2>}
//                     {activeSection === 'admin' && <Admin />}
//                     {activeSection === 'principal' && <Principal />}
//                     {activeSection === 'student' && <h2>Student Section</h2>}

//                     {/* Profile Card */}
//                     {showProfile && user && (
//                         <div className="card p-3 mt-3" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
//                             <h5 className="card-title">Profile Information</h5>
//                             <p><strong>Username:</strong> {user.username}</p>
//                             <p><strong>Email:</strong> {user.email}</p>
//                             <p><strong>Phone:</strong> {user.phone}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;



import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './SideBar';
import Admin from './Admin';
import Departments from './Departments';
import RoleAssign from './RoleAssign';


//import Principal from './Principal';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';


const Home = () => {
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState(null);
    const [sessionTimer, setSessionTimer] = useState(null);
    const [activeSection, setActiveSection] = useState('home');

    const logoutUser = useCallback(async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        } catch (error) {
            console.error("Logout failed", error);
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }, [navigate]);

    const startSessionTimer = useCallback(() => {
        if (sessionTimer) clearTimeout(sessionTimer);

        const timer = setTimeout(() => {
            alert("Session expired. Please login again.");
            logoutUser();
        }, 2 * 60 * 1000);

        setSessionTimer(timer);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/profile", { withCredentials: true });
                if (response.data.success) {
                    setUser(response.data.user);
                    startSessionTimer();
                } else {
                    logoutUser();
                }
            } catch (error) {
                logoutUser();
            }
        };

        fetchUserData();
    }, [logoutUser, startSessionTimer]);

    useEffect(() => {
        return () => clearTimeout(sessionTimer);
    }, [sessionTimer]);

    return (
        <div className="d-flex flex-column" style={{ height: '100vh' }}>
            {/* Header Section */}
            <header className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
                <div className="flex-grow-1 d-flex justify-content-center">
                    <h3 className="m-0">College</h3>
                </div>
                {user && (
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light me-3" onClick={() => setShowProfile(!showProfile)}>
                            <FaUser className="me-2" /> Profile
                        </button>
                        <button className="btn btn-danger" onClick={logoutUser}>
                            <FaSignOutAlt className="me-2" /> Logout
                        </button>
                    </div>
                )}
            </header>

            <div className="d-flex flex-grow-1">
                <Sidebar setActiveSection={setActiveSection} />
                <div className="container-fluid mt-4 d-flex flex-column" style={{ flex: 1 }}>
                    {/* Dynamic Content Based on Active Section */}
                    {activeSection === 'home' && <h2>Welcome, {user?.username}!</h2>}
                    {activeSection === 'about-us' && <h2>About Us Section</h2>}
                    {activeSection === 'admin' && <Admin />}
                    {activeSection === 'departments' && <Departments/>}
                    {activeSection === 'roleassign' && <RoleAssign/>}
                    {/* {activeSection === 'principal' && <Principal />}
                    {activeSection === 'student' && <h2>Student Section</h2>} */}

                    {/* Profile Card */}
                    {showProfile && user && (
                        <div className="card p-3 mt-3" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
                            <h5 className="card-title">Profile Information</h5>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
