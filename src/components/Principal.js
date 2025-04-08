import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Principal = () => {
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editRoleID, setEditRoleID] = useState(null);
    const [editRoleName, setEditRoleName] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newRoleName, setNewRoleName] = useState("");

    const handleCheckboxChange = (roleID) => {
        setSelectedRoles((prevSelected) =>
            prevSelected.includes(roleID)
                ? prevSelected.filter((id) => id !== roleID)
                : [...prevSelected, roleID]
        );
    };

    const handleDeleteSelected = () => {
        setRoles(roles.filter((role) => !selectedRoles.includes(role.roleID)));
        setSelectedRoles([]);
    };

    const handleDeleteSingleRole = (roleID) => {
        setRoles(roles.filter((role) => role.roleID !== roleID));
    };

    const handleEditClick = (role) => {
        setEditRoleID(role.roleID);
        setEditRoleName(role.roleName);
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        setRoles(roles.map((role) =>
            role.roleID === editRoleID ? { ...role, roleName: editRoleName } : role
        ));
        setShowEditModal(false);
    };

    const handleAddRole = () => {
        setShowAddModal(true);
    };

    const handleSaveNewRole = () => {
        if (newRoleName.trim()) {
            const newRole = {
                roleID: roles.length + 1,
                roleName: newRoleName,
            };
            setRoles([...roles, newRole]);
            setNewRoleName("");
            setShowAddModal(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Principal Role Management</h2>

            <Button variant="success" className="mb-3 me-2" onClick={handleAddRole}>
                <FaPlus /> Add Role
            </Button>

            <Button
                variant="danger"
                className="mb-3"
                onClick={handleDeleteSelected}
                disabled={selectedRoles.length === 0}
            >
                <FaTrash /> Delete Selected
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>#</th>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.length > 0 ? (
                        roles.map((role, index) => (
                            <tr key={role.roleID}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(role.roleID)}
                                        checked={selectedRoles.includes(role.roleID)}
                                    />
                                </td>
                                <td>{index + 1}</td>
                                <td>{role.roleName}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleEditClick(role)}
                                    >
                                        <FaEdit /> Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDeleteSingleRole(role.roleID)}
                                    >
                                        <FaTrash /> Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No roles available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

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
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

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
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveNewRole}>
                        Add Role
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Principal;
