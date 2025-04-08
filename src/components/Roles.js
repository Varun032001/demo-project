// import React, { useState } from 'react';
// import { FaUsers } from 'react-icons/fa';

// const Roles = ({ setActiveSection }) => {
//     const [showRolesDropdown, setShowRolesDropdown] = useState(false);

//     return (
//         <li className="nav-item">
//             <button 
//                 className="nav-link text-light bg-transparent border-0 d-flex align-items-center"
//                 onClick={() => setShowRolesDropdown(!showRolesDropdown)}
//             >
//                 <FaUsers className="me-2" /> Roles
//             </button>
//             {showRolesDropdown && (
//                 <ul className="list-unstyled ms-3">
//                     <li>
//                         <button 
//                             className="nav-link text-light bg-transparent border-0"
//                             onClick={() => setActiveSection('admin')}
//                         >
//                             Admin
//                         </button>
//                     </li>
//                     <li>
//                         <button 
//                             className="nav-link text-light bg-transparent border-0"
//                             onClick={() => setActiveSection('principal')}
//                         >
//                             Principal
//                         </button>
//                     </li>
//                     <li>
//                         <button 
//                             className="nav-link text-light bg-transparent border-0"
//                             onClick={() => setActiveSection('student')}
//                         >
//                             Student
//                         </button>
//                     </li>
//                 </ul>
//             )}
//         </li>
//     );
// };

// export default Roles;






import React, { useState } from 'react';
import { FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AdminDropdown = ({ setActiveSection }) => {
    const [showAdminDropdown, setShowAdminDropdown] = useState(false);

    return (
        <li className="nav-item">
            <button 
                className="nav-link text-light bg-transparent border-0 d-flex align-items-center justify-content-between w-100"
                onClick={() => setShowAdminDropdown(!showAdminDropdown)}
            >
                <span><FaUsers className="me-2" /> Admin</span>
                {showAdminDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showAdminDropdown && (
                <ul className="list-unstyled ms-3">
                    <li>
                        <button 
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('admin')}
                        >
                            Roles
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('departments')}
                        >
                            Department
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('roleassign')}
                        >
                            Role Assign
                        </button>
                    </li>
                </ul>
            )}
        </li>
    );
};

export default AdminDropdown;
