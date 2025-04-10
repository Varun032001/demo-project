
// import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Department = () => {
//     const [departments, setDepartments] = useState([]);
//     const [selectedDepartments, setSelectedDepartments] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [editDepartmentID, setEditDepartmentID] = useState(null);
//     const [editDepartmentName, setEditDepartmentName] = useState("");
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [newDepartmentName, setNewDepartmentName] = useState("");

//     const handleCheckboxChange = (id) => {
//         setSelectedDepartments((prev) =>
//             prev.includes(id)
//                 ? prev.filter((dId) => dId !== id)
//                 : [...prev, id]
//         );
//     };

//     const handleDeleteSelected = () => {
//         setDepartments((prev) =>
//             prev.filter((dept) => !selectedDepartments.includes(dept.departmentID))
//         );
//         setSelectedDepartments([]);
//     };

//     const handleDeleteSingle = (id) => {
//         setDepartments((prev) =>
//             prev.filter((dept) => dept.departmentID !== id)
//         );
//     };

//     const handleEditClick = (dept) => {
//         setEditDepartmentID(dept.departmentID);
//         setEditDepartmentName(dept.departmentName);
//         setShowEditModal(true);
//     };

//     const handleSaveEdit = () => {
//         setDepartments((prev) =>
//             prev.map((dept) =>
//                 dept.departmentID === editDepartmentID
//                     ? { ...dept, departmentName: editDepartmentName.trim() }
//                     : dept
//             )
//         );
//         setShowEditModal(false);
//     };

//     const handleAddDepartment = () => {
//         setShowAddModal(true);
//     };

//     const handleSaveNewDepartment = () => {
//         if (!newDepartmentName.trim()) return;

//         const newID =
//             departments.length > 0
//                 ? Math.max(...departments.map((d) => d.departmentID)) + 1
//                 : 1;

//         const newDept = {
//             departmentID: newID,
//             departmentName: newDepartmentName.trim(),
//         };

//         setDepartments((prev) => [...prev, newDept]);
//         setNewDepartmentName("");
//         setShowAddModal(false);
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Department Management</h2>

//             <div className="mb-3 d-flex gap-2">
//                 <Button
//                     variant="success"
//                     onClick={handleAddDepartment}
//                     title="Add Department"
//                 >
//                     <FaPlus />
//                 </Button>

//                 <Button
//                     variant="danger"
//                     onClick={handleDeleteSelected}
//                     disabled={selectedDepartments.length === 0}
//                     title="Delete Selected"
//                 >
//                     <FaTrash />
//                 </Button>
//             </div>

//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Select</th>
//                         <th>Department ID</th>
//                         <th>Department Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {departments.length > 0 ? (
//                         departments.map((dept) => (
//                             <tr key={dept.departmentID}>
//                                 <td>
//                                     <Form.Check
//                                         type="checkbox"
//                                         onChange={() => handleCheckboxChange(dept.departmentID)}
//                                         checked={selectedDepartments.includes(dept.departmentID)}
//                                     />
//                                 </td>
//                                 <td>{dept.departmentID}</td>
//                                 <td>{dept.departmentName}</td>
//                                 <td>
//                                     <Button
//                                         variant="link"
//                                         className="text-warning me-2 p-0"
//                                         onClick={() => handleEditClick(dept)}
//                                         title="Edit"
//                                     >
//                                         <FaEdit />
//                                     </Button>
//                                     <Button
//                                         variant="link"
//                                         className="text-danger p-0"
//                                         onClick={() => handleDeleteSingle(dept.departmentID)}
//                                         title="Delete"
//                                     >
//                                         <FaTrash />
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" className="text-center">
//                                 No departments available.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             {/* Edit Modal */}
//             <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group>
//                         <Form.Label>Department Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={editDepartmentName}
//                             onChange={(e) => setEditDepartmentName(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="primary" onClick={handleSaveEdit}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             {/* Add Modal */}
//             <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group>
//                         <Form.Label>Department Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={newDepartmentName}
//                             onChange={(e) => setNewDepartmentName(e.target.value)}
//                             placeholder="Enter department name"
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowAddModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="primary" onClick={handleSaveNewDepartment}>
//                         Add Department
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default Department;






import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editDepartmentID, setEditDepartmentID] = useState(null);
    const [editDepartmentName, setEditDepartmentName] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newDepartmentName, setNewDepartmentName] = useState("");

    const token = localStorage.getItem("token");

    const fetchDepartments = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/departmentdetails", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDepartments(response.data);
        } catch (err) {
            console.error("Error fetching departments", err);
        }
    }, [token]);

    useEffect(() => {
        fetchDepartments();
    }, [fetchDepartments]);

    const handleAddDepartment = () => {
        setShowAddModal(true);
    };

    const handleCheckboxChange = (departmentID) => {
        if (selectedDepartments.includes(departmentID)) {
            setSelectedDepartments(
                selectedDepartments.filter((id) => id !== departmentID)
            );
        } else {
            setSelectedDepartments([...selectedDepartments, departmentID]);
        }
    };

    const handleEditClick = (department) => {
        setEditDepartmentID(department.departmentID);
        setEditDepartmentName(department.departmentName);
        setShowEditModal(true);
    };

    const handleDeleteSelected = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/departmentdetails/delete-multiple",
                { departmentIDs: selectedDepartments },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchDepartments();
            setSelectedDepartments([]);
        } catch (err) {
            console.error("Error deleting departments", err);
        }
    };

    const handleDeleteSingle = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/departmentdetails/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchDepartments();
        } catch (err) {
            console.error("Error deleting department", err);
        }
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(
                `http://localhost:5000/api/departmentdetails/${editDepartmentID}`,
                { departmentName: editDepartmentName.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchDepartments();
            setShowEditModal(false);
        } catch (err) {
            console.error("Error updating department", err);
        }
    };

    const handleSaveNewDepartment = async () => {
        if (!newDepartmentName.trim()) return;
        try {
            await axios.post(
                "http://localhost:5000/api/departmentdetails",
                { departmentName: newDepartmentName.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchDepartments();
            setNewDepartmentName("");
            setShowAddModal(false);
        } catch (err) {
            console.error("Error adding department", err);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Department Management</h2>

            <div className="mb-3 d-flex gap-2">
                <Button variant="success" onClick={handleAddDepartment} title="Add Department">
                    <FaPlus />
                </Button>

                <Button
                    variant="danger"
                    onClick={handleDeleteSelected}
                    disabled={selectedDepartments.length === 0}
                    title="Delete Selected"
                >
                    <FaTrash />
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.length > 0 ? (
                        departments.map((dept) => (
                            <tr key={dept.departmentID}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(dept.departmentID)}
                                        checked={selectedDepartments.includes(dept.departmentID)}
                                    />
                                </td>
                                <td>{dept.departmentID}</td>
                                <td>{dept.departmentName}</td>
                                <td>
                                    <Button
                                        variant="link"
                                        className="text-warning me-2 p-0"
                                        onClick={() => handleEditClick(dept)}
                                        title="Edit"
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="link"
                                        className="text-danger p-0"
                                        onClick={() => handleDeleteSingle(dept.departmentID)}
                                        title="Delete"
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No departments available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={editDepartmentName}
                            onChange={(e) => setEditDepartmentName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Add Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newDepartmentName}
                            onChange={(e) => setNewDepartmentName(e.target.value)}
                            placeholder="Enter department name"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveNewDepartment}>
                        Add Department
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Departments;