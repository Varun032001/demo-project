// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";


// const Admin = () => {
//     const [roles, setRoles] = useState([]);
//     const [selectedRoles, setSelectedRoles] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [editRoleID, setEditRoleID] = useState(null);
//     const [editRoleName, setEditRoleName] = useState("");
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [newRoleName, setNewRoleName] = useState("");

//     const token = localStorage.getItem("token");

//     useEffect(() => {
//         fetchRoles();
//     }, []);

//     const fetchRoles = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/roles", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setRoles(res.data);
//         } catch (err) {
//             console.error("Failed to fetch roles:", err);
//         }
//     };

//     const handleCheckboxChange = (roleID) => {
//         setSelectedRoles((prevSelected) =>
//             prevSelected.includes(roleID)
//                 ? prevSelected.filter((id) => id !== roleID)
//                 : [...prevSelected, roleID]
//         );
//     };

//     const handleDeleteSelected = async () => {
//         try {
//             await axios.post("http://localhost:5000/api/roles/delete-multiple", {
//                 roleIDs: selectedRoles
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchRoles();
//             setSelectedRoles([]);
//         } catch (err) {
//             console.error("Failed to delete roles:", err);
//         }
//     };

//     const handleDeleteSingleRole = async (roleID) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/roles/${roleID}`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchRoles();
//         } catch (err) {
//             console.error("Failed to delete role:", err);
//         }
//     };

//     const handleEditClick = (role) => {
//         setEditRoleID(role.roleID);
//         setEditRoleName(role.roleName);
//         setShowEditModal(true);
//     };

//     const handleSaveEdit = async () => {
//         try {
//             await axios.put(`http://localhost:5000/api/roles/${editRoleID}`, {
//                 roleName: editRoleName
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchRoles();
//             setShowEditModal(false);
//         } catch (err) {
//             console.error("Failed to update role:", err);
//         }
//     };

//     const handleAddRole = () => {
//         setShowAddModal(true);
//     };

//     const handleSaveNewRole = async () => {
//         if (!newRoleName.trim()) return;
//         try {
//             await axios.post("http://localhost:5000/api/roles", {
//                 roleName: newRoleName
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchRoles();
//             setNewRoleName("");
//             setShowAddModal(false);
//         } catch (err) {
//             console.error("Failed to add role:", err);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Admin Role Management</h2>

//             <Button variant="success" className="mb-3 me-2" onClick={handleAddRole}>
//                 <FaPlus /> Add Role
//             </Button>

//             <Button
//                 variant="danger"
//                 className="mb-3"
//                 onClick={handleDeleteSelected}
//                 disabled={selectedRoles.length === 0}
//             >
//                 <FaTrash /> Delete Selected
//             </Button>

//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Select</th>
//                         <th>Role ID</th>
//                         <th>Role Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {roles.length > 0 ? (
//                         roles.map((role) => (
//                             <tr key={role.roleID}>
//                                 <td>
//                                     <Form.Check
//                                         type="checkbox"
//                                         onChange={() => handleCheckboxChange(role.roleID)}
//                                         checked={selectedRoles.includes(role.roleID)}
//                                     />
//                                 </td>
//                                 <td>{role.roleID}</td>
//                                 <td>{role.roleName}</td>
//                                 <td>
//                                     <Button variant="warning" className="me-2" onClick={() => handleEditClick(role)}>
//                                         <FaEdit /> Edit
//                                     </Button>
//                                     <Button variant="danger" onClick={() => handleDeleteSingleRole(role.roleID)}>
//                                         <FaTrash /> Delete
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" className="text-center">No roles available.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             {/* Edit Role Modal */}
//             <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Role</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Role Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 value={editRoleName}
//                                 onChange={(e) => setEditRoleName(e.target.value)}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
//                     <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
//                 </Modal.Footer>
//             </Modal>

//             {/* Add Role Modal */}
//             <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add New Role</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Role Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 value={newRoleName}
//                                 onChange={(e) => setNewRoleName(e.target.value)}
//                                 placeholder="Enter role name"
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
//                     <Button variant="primary" onClick={handleSaveNewRole}>Add Role</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default Admin;




import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Admin = () => {
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editRoleID, setEditRoleID] = useState(null);
    const [editRoleName, setEditRoleName] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newRoleName, setNewRoleName] = useState("");

    const token = localStorage.getItem("token");

    const fetchRoles = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/roles", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRoles(res.data);
        } catch (err) {
            console.error("Failed to fetch roles:", err);
        }
    }, [token]);

    useEffect(() => {
        fetchRoles();
    }, [fetchRoles]);

    const handleCheckboxChange = (roleID) => {
        setSelectedRoles((prevSelected) =>
            prevSelected.includes(roleID)
                ? prevSelected.filter((id) => id !== roleID)
                : [...prevSelected, roleID]
        );
    };

    const handleDeleteSelected = async () => {
        try {
            await axios.post("http://localhost:5000/api/roles/delete-multiple", {
                roleIDs: selectedRoles
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchRoles();
            setSelectedRoles([]);
        } catch (err) {
            console.error("Failed to delete roles:", err);
        }
    };

    const handleDeleteSingleRole = async (roleID) => {
        try {
            await axios.delete(`http://localhost:5000/api/roles/${roleID}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchRoles();
        } catch (err) {
            console.error("Failed to delete role:", err);
        }
    };

    const handleEditClick = (role) => {
        setEditRoleID(role.roleID);
        setEditRoleName(role.roleName);
        setShowEditModal(true);
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(`http://localhost:5000/api/roles/${editRoleID}`, {
                roleName: editRoleName
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchRoles();
            setShowEditModal(false);
        } catch (err) {
            console.error("Failed to update role:", err);
        }
    };

    const handleAddRole = () => {
        setShowAddModal(true);
    };

    const handleSaveNewRole = async () => {
        if (!newRoleName.trim()) return;
        try {
            await axios.post("http://localhost:5000/api/roles", {
                roleName: newRoleName
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchRoles();
            setNewRoleName("");
            setShowAddModal(false);
        } catch (err) {
            console.error("Failed to add role:", err);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Admin Role Management</h2>

            <div className="mb-3 d-flex gap-2">
                <Button
                    variant="success"
                    onClick={handleAddRole}
                    title="Add Role"
                >
                    <FaPlus />
                </Button>

                <Button
                    variant="danger"
                    onClick={handleDeleteSelected}
                    disabled={selectedRoles.length === 0}
                    title="Delete Selected"
                >
                    <FaTrash />
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Role ID</th>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.length > 0 ? (
                        roles.map((role) => (
                            <tr key={role.roleID}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(role.roleID)}
                                        checked={selectedRoles.includes(role.roleID)}
                                    />
                                </td>
                                <td>{role.roleID}</td>
                                <td>{role.roleName}</td>
                                <td>
                                    <Button
                                        variant="link"
                                        className="text-warning me-2 p-0"
                                        onClick={() => handleEditClick(role)}
                                        title="Edit"
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="link"
                                        className="text-danger p-0"
                                        onClick={() => handleDeleteSingleRole(role.roleID)}
                                        title="Delete"
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No roles available.</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Role Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editRoleName}
                                onChange={(e) => setEditRoleName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Add Role Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={newRoleName}
                                onChange={(e) => setNewRoleName(e.target.value)}
                                placeholder="Enter role name"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleSaveNewRole}>Add Role</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Admin;