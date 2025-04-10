// // const express = require("express");
// // const mysql = require("mysql2");
// // const cors = require("cors");
// // const bcrypt = require("bcrypt");
// // const bodyParser = require("body-parser");
// // const jwt = require("jsonwebtoken");
// // const session = require("express-session");

// // const app = express();
// // app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// // app.use(bodyParser.json());

// // app.use(
// //     session({
// //         secret: "wellcome",
// //         resave: false,
// //         saveUninitialized: false,  
// //         cookie: { 
// //             secure: false,  
// //             maxAge: 2 * 60 * 1000  
// //         }
// //     })
// // );

// // const db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "Varunreddy@1234",
// //     database: "projectone"
// // });

// // db.connect(err => {
// //     if (err) {
// //         console.error("Error connecting to database:", err);
// //         return;
// //     }
// //     console.log("✅ Connected to MySQL database.");
// // });

// // const JWT_SECRET = "welcome sir";


// // const authenticateToken = (req, res, next) => {
// //     const token = req.headers["authorization"];
// //     if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

// //     jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
// //         if (err) return res.status(403).json({ message: "Invalid token" });
// //         req.user = user;
// //         next();
// //     });
// // };


// // app.post("/signup", async (req, res) => {
// //     const { username, email, password, name, phone } = req.body;

// //     if (!username || !email || !password || !name || !phone) {
// //         return res.status(400).json({ message: "All fields are required" });
// //     }

// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);

// //         const sql = "INSERT INTO signindetails (username, email, password, name, phone) VALUES (?, ?, ?, ?, ?)";
// //         db.query(sql, [username, email, hashedPassword, name, phone], (err) => {
// //             if (err) {
// //                 return res.status(500).json({ message: "Database error", error: err });
// //             }
// //             res.json({ success: true, message: "User registered successfully" });
// //         });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error encrypting password", error });
// //     }
// // });


// // app.post("/login", (req, res) => {
// //     const { username, password } = req.body;

// //     if (!username || !password) {
// //         return res.status(400).json({ message: "Username and Password are required" });
// //     }

// //     const sql = "SELECT * FROM signindetails WHERE username = ?";
// //     db.query(sql, [username], async (err, results) => {
// //         if (err) {
// //             return res.status(500).json({ message: "Database error", error: err });
// //         }

// //         if (results.length > 0) {
// //             const user = results[0];

// //             const isMatch = await bcrypt.compare(password, user.password);
// //             if (isMatch) {
// //                 const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

                
// //                 req.session.user = { id: user.id, username: user.username };
// //                 req.session.cookie.expires = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes expiration

// //                 res.json({ success: true, message: "Login successful", token, user: { id: user.id, username: user.username ,email: user.email, phone: user.phone} });
// //             } else {
// //                 res.status(401).json({ success: false, message: "Invalid username or password" });
// //             }
// //         } else {
// //             res.status(401).json({ success: false, message: "Invalid username or password" });
// //         }
// //     });
// // });


// // app.get("/profile", (req, res) => {
// //     if (!req.session.user) {
// //         return res.status(401).json({ success: false, message: "Session expired. Please login again." });
// //     }

    
// //     if (req.session.cookie.expires && new Date() > req.session.cookie.expires) {
// //         req.session.destroy();
// //         return res.status(401).json({ success: false, message: "Session expired. Please login again." });
// //     }

// //     res.json({ success: true, message: "You have accessed a protected route", user: req.session.user });
// // });


// // app.post("/logout", (req, res) => {
// //     req.session.destroy(err => {
// //         if (err) return res.status(500).json({ message: "Logout failed" });
// //         res.json({ success: true, message: "Logged out successfully" });
// //     });
// // });


// // const PORT = 5000;
// // app.listen(PORT, () => {
// //     console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });



// // const express = require("express");
// // const mysql = require("mysql2");
// // const cors = require("cors");
// // const bcrypt = require("bcrypt");
// // const bodyParser = require("body-parser");
// // const jwt = require("jsonwebtoken");
// // const session = require("express-session");

// // const app = express();
// // app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// // app.use(bodyParser.json());

// // app.use(
// //     session({
// //         secret: "wellcome",
// //         resave: false,
// //         saveUninitialized: false,
// //         cookie: {
// //             secure: false,
// //             maxAge: 2 * 60 * 1000,
// //         },
// //     })
// // );

// // const db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "Varunreddy@1234",
// //     database: "projectone"
// // });

// // db.connect(err => {
// //     if (err) {
// //         console.error("Error connecting to database:", err);
// //         return;
// //     }
// //     console.log("✅ Connected to MySQL database.");
// // });

// // const JWT_SECRET = "welcome sir";

// // // Token middleware
// // const authenticateToken = (req, res, next) => {
// //     const token = req.headers["authorization"];
// //     if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

// //     jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
// //         if (err) return res.status(403).json({ message: "Invalid token" });
// //         req.user = user;
// //         next();
// //     });
// // };

// // // ---------- AUTH ROUTES ----------
// // app.post("/signup", async (req, res) => {
// //     const { username, email, password, name, phone } = req.body;

// //     if (!username || !email || !password || !name || !phone) {
// //         return res.status(400).json({ message: "All fields are required" });
// //     }

// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const sql = "INSERT INTO signindetails (username, email, password, name, phone) VALUES (?, ?, ?, ?, ?)";
// //         db.query(sql, [username, email, hashedPassword, name, phone], (err) => {
// //             if (err) {
// //                 return res.status(500).json({ message: "Database error", error: err });
// //             }
// //             res.json({ success: true, message: "User registered successfully" });
// //         });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error encrypting password", error });
// //     }
// // });

// // app.post("/login", (req, res) => {
// //     const { username, password } = req.body;

// //     if (!username || !password) {
// //         return res.status(400).json({ message: "Username and Password are required" });
// //     }

// //     const sql = "SELECT * FROM signindetails WHERE username = ?";
// //     db.query(sql, [username], async (err, results) => {
// //         if (err) {
// //             return res.status(500).json({ message: "Database error", error: err });
// //         }

// //         if (results.length > 0) {
// //             const user = results[0];
// //             const isMatch = await bcrypt.compare(password, user.password);
// //             if (isMatch) {
// //                 const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

// //                 req.session.user = { id: user.id, username: user.username };
// //                 req.session.cookie.expires = new Date(Date.now() + 2 * 60 * 1000);

// //                 res.json({
// //                     success: true,
// //                     message: "Login successful",
// //                     token,
// //                     user: { id: user.id, username: user.username, email: user.email, phone: user.phone },
// //                 });
// //             } else {
// //                 res.status(401).json({ success: false, message: "Invalid username or password" });
// //             }
// //         } else {
// //             res.status(401).json({ success: false, message: "Invalid username or password" });
// //         }
// //     });
// // });

// // app.get("/profile", (req, res) => {
// //     if (!req.session.user) {
// //         return res.status(401).json({ success: false, message: "Session expired. Please login again." });
// //     }

// //     if (req.session.cookie.expires && new Date() > req.session.cookie.expires) {
// //         req.session.destroy();
// //         return res.status(401).json({ success: false, message: "Session expired. Please login again." });
// //     }

// //     res.json({ success: true, message: "You have accessed a protected route", user: req.session.user });
// // });

// // app.post("/logout", (req, res) => {
// //     req.session.destroy(err => {
// //         if (err) return res.status(500).json({ message: "Logout failed" });
// //         res.json({ success: true, message: "Logged out successfully" });
// //     });
// // });

// // // ---------- ROLE MANAGEMENT ROUTES ----------
// // app.get("/api/roles", authenticateToken, (req, res) => {
// //     db.query("SELECT * FROM roles", (err, results) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json(results);
// //     });
// // });

// // app.post("/api/roles", authenticateToken, (req, res) => {
// //     const { roleName } = req.body;
// //     if (!roleName) return res.status(400).json({ message: "Role name is required" });

// //     db.query("INSERT INTO roles (roleName) VALUES (?)", [roleName], (err) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json({ success: true, message: "Role added successfully" });
// //     });
// // });

// // app.put("/api/roles/:id", authenticateToken, (req, res) => {
// //     const { id } = req.params;
// //     const { roleName } = req.body;

// //     db.query("UPDATE roles SET roleName = ? WHERE roleID = ?", [roleName, id], (err) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json({ success: true, message: "Role updated successfully" });
// //     });
// // });

// // app.delete("/api/roles/:id", authenticateToken, (req, res) => {
// //     const { id } = req.params;

// //     db.query("DELETE FROM roles WHERE roleID = ?", [id], (err) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json({ success: true, message: "Role deleted successfully" });
// //     });
// // });

// // app.post("/api/roles/delete-multiple", authenticateToken, (req, res) => {
// //     const { roleIDs } = req.body;
// //     if (!Array.isArray(roleIDs) || roleIDs.length === 0) {
// //         return res.status(400).json({ message: "No role IDs provided" });
// //     }

// //     const placeholders = roleIDs.map(() => "?").join(",");
// //     const sql = `DELETE FROM roles WHERE roleID IN (${placeholders})`;

// //     db.query(sql, roleIDs, (err) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json({ success: true, message: "Roles deleted successfully" });
// //     });
// // });


// // // ---------- DEPARTMENT MANAGEMENT ROUTES ----------

// // // Get all departments
// // app.get("/api/departments", authenticateToken, (req, res) => {
// //     db.query("SELECT * FROM departmentdetails", (err, results) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json(results);
// //     });
// // });

// // // Add new department
// // app.post("/api/departments", authenticateToken, (req, res) => {
// //     const { department } = req.body;
// //     if (!department) return res.status(400).json({ message: "Department name is required" });

// //     db.query(
// //         "INSERT INTO departmentdetails (department) VALUES (?)",
// //         [department],
// //         (err, result) => {
// //             if (err) return res.status(500).json({ message: "Database error", error: err });
// //             res.json({ success: true, message: "Department added successfully", departmentID: result.insertId });
// //         }
// //     );
// // });

// // // Update department
// // app.put("/api/departments/:id", authenticateToken, (req, res) => {
// //     const { id } = req.params;
// //     const { department } = req.body;

// //     db.query(
// //         "UPDATE departmentdetails SET department = ? WHERE departmentID = ?",
// //         [department, id],
// //         (err) => {
// //             if (err) return res.status(500).json({ message: "Database error", error: err });
// //             res.json({ success: true, message: "Department updated successfully" });
// //         }
// //     );
// // });

// // // Delete single department
// // app.delete("/api/departments/:id", authenticateToken, (req, res) => {
// //     const { id } = req.params;

// //     db.query(
// //         "DELETE FROM departmentdetails WHERE departmentID = ?",
// //         [id],
// //         (err) => {
// //             if (err) return res.status(500).json({ message: "Database error", error: err });
// //             res.json({ success: true, message: "Department deleted successfully" });
// //         }
// //     );
// // });

// // // Delete multiple departments
// // app.post("/api/departments/delete-multiple", authenticateToken, (req, res) => {
// //     const { departmentIDs } = req.body;
// //     if (!Array.isArray(departmentIDs) || departmentIDs.length === 0) {
// //         return res.status(400).json({ message: "No department IDs provided" });
// //     }

// //     const placeholders = departmentIDs.map(() => "?").join(",");
// //     const sql = `DELETE FROM departmentdetails WHERE departmentID IN (${placeholders})`;

// //     db.query(sql, departmentIDs, (err) => {
// //         if (err) return res.status(500).json({ message: "Database error", error: err });
// //         res.json({ success: true, message: "Departments deleted successfully" });
// //     });
// // });





// // // ---------- START SERVER ----------
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //     console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });








const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use(
    session({
        secret: "wellcome",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 2 * 60 * 1000,
        },
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Varunreddy@1234",
    database: "projectone"
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("✅ Connected to MySQL database.");
});

const JWT_SECRET = "welcome sir";

// Token middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

    jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};

// Reusable verifyToken middleware for protected routes
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};

// ---------- AUTH ROUTES ----------
app.post("/signup", async (req, res) => {
    const { username, email, password, name, phone } = req.body;

    if (!username || !email || !password || !name || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO signindetails (username, email, password, name, phone) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [username, email, hashedPassword, name, phone], (err) => {
            if (err) return res.status(500).json({ message: "Database error", error: err });
            res.json({ success: true, message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Error encrypting password", error });
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and Password are required" });
    }

    const sql = "SELECT * FROM signindetails WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });

        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

                req.session.user = { id: user.id, username: user.username };
                req.session.cookie.expires = new Date(Date.now() + 20 * 60 * 1000);

                res.json({
                    success: true,
                    message: "Login successful",
                    token,
                    user: { id: user.id, username: user.username, email: user.email, phone: user.phone },
                });
            } else {
                res.status(401).json({ success: false, message: "Invalid username or password" });
            }
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    });
});

app.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ success: false, message: "Session expired. Please login again." });
    }

    if (req.session.cookie.expires && new Date() > req.session.cookie.expires) {
        req.session.destroy();
        return res.status(401).json({ success: false, message: "Session expired. Please login again." });
    }

    res.json({ success: true, message: "You have accessed a protected route", user: req.session.user });
});

app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.json({ success: true, message: "Logged out successfully" });
    });
});

// ---------- ROLE MANAGEMENT ROUTES ----------
app.get("/api/roles", authenticateToken, (req, res) => {
    db.query("SELECT * FROM roles", (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json(results);
    });
});

app.post("/api/roles", authenticateToken, (req, res) => {
    const { roleName } = req.body;
    if (!roleName) return res.status(400).json({ message: "Role name is required" });

    db.query("INSERT INTO roles (roleName) VALUES (?)", [roleName], (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Role added successfully" });
    });
});

app.put("/api/roles/:id", authenticateToken, (req, res) => {
    const { id } = req.params;
    const { roleName } = req.body;

    db.query("UPDATE roles SET roleName = ? WHERE roleID = ?", [roleName, id], (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Role updated successfully" });
    });
});

app.delete("/api/roles/:id", authenticateToken, (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM roles WHERE roleID = ?", [id], (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Role deleted successfully" });
    });
});

app.post("/api/roles/delete-multiple", authenticateToken, (req, res) => {
    const { roleIDs } = req.body;
    if (!Array.isArray(roleIDs) || roleIDs.length === 0) {
        return res.status(400).json({ message: "No role IDs provided" });
    }

    const placeholders = roleIDs.map(() => "?").join(",");
    const sql = `DELETE FROM roles WHERE roleID IN (${placeholders})`;

    db.query(sql, roleIDs, (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Roles deleted successfully" });
    });
});


// Get all departments
app.get("/api/departmentdetails", authenticateToken, (req, res) => {
    db.query("SELECT * FROM departmentdetails", (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json(results);
    });
});

// Add a department
app.post("/api/departmentdetails", authenticateToken, (req, res) => {
    const { departmentName } = req.body;
    if (!departmentName) return res.status(400).json({ message: "Department name is required" });

    db.query("INSERT INTO departmentdetails (departmentName) VALUES (?)", [departmentName], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Department added successfully", departmentID: result.insertId });
    });
});

// Update a department
app.put("/api/departmentdetails/:id", authenticateToken, (req, res) => {
    const { id } = req.params;
    const { departmentName } = req.body;
    if (!departmentName) return res.status(400).json({ message: "Department name is required" });

    db.query("UPDATE departmentdetails SET departmentName = ? WHERE departmentID = ?", [departmentName, id], (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Department updated successfully" });
    });
});

// Delete a single department
app.delete("/api/departmentdetails/:id", authenticateToken, (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM departmentdetails WHERE departmentID = ?", [id], (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Department deleted successfully" });
    });
});

// Delete multiple departments
app.post("/api/departmentdetails/delete-multiple", authenticateToken, (req, res) => {
    const { departmentIDs } = req.body;

    if (!Array.isArray(departmentIDs) || departmentIDs.length === 0) {
        return res.status(400).json({ message: "No department IDs provided" });
    }

    const placeholders = departmentIDs.map(() => "?").join(",");
    const sql = `DELETE FROM departmentdetails WHERE departmentID IN (${placeholders})`;

    db.query(sql, departmentIDs, (err) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        res.json({ success: true, message: "Departments deleted successfully" });
    });
});

// // 👤 Get Current User
// app.get("/api/user/me", verifyToken, (req, res) => {
//     db.query(
//         "SELECT id, name, username, email, phone, roleName, department FROM signindetails WHERE id = ?",
//         [req.user.id],
//         (err, results) => {
//             if (err) return res.status(500).json({ message: "Database error" });
//             if (results.length === 0) return res.status(404).json({ message: "User not found" });
//             return res.status(200).json({ message: "User details retrieved successfully", data: results[0] });
//         }
//     );
// });

// // 📋 Get All Users (Admin)
// app.get("/api/signindetails", verifyToken, (req, res) => {
//     db.query("SELECT id, name, username, email, phone, roleName, department FROM signindetails", (err, results) => {
//         if (err) return res.status(500).json({ message: "Database error" });
//         return res.status(200).json({ message: "User list retrieved successfully", data: results });
//     });
// });

// // 🧑‍💼 Get Assigned Users Only
// app.get("/api/signindetails/assigned", (req, res) => {
//     db.query("SELECT id, name, email, roleName, department FROM signindetails WHERE roleName IS NOT NULL AND department IS NOT NULL", (err, results) => {
//         if (err) return res.status(500).json({ message: "Error fetching employees" });
//         return res.status(200).json({ message: "Assigned employees fetched", data: results });
//     });
// });

// // 📝 Assign Role & Department to User
// app.put("/api/signindetails/:id", (req, res) => {
//     const { roleName, department } = req.body;
//     const { id } = req.params;

//     if (!roleName || !department) {
//         return res.status(400).json({ message: "Role and department are required" });
//     }

//     db.query("UPDATE signindetails SET roleName = ?, department = ? WHERE id = ?", [roleName, department, id], (err) => {
//         if (err) return res.status(500).json({ message: "Error updating role assignment" });
//         return res.status(200).json({ message: "Role assigned successfully" });
//     });
// });

// // 404 fallback
// app.use((req, res) => {
//     res.status(404).json({ message: "Not found" });
// });


app.get("/api/signindetails", verifyToken, (req, res) => {
    db.query("SELECT id, name, username, email, phone, roleName, departmentName FROM signindetails", (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        return res.status(200).json(results);
    });
});
 
app.put("/api/signindetails/:id", verifyToken, (req, res) => {
    const { roleName, departmentName } = req.body;
    const { id } = req.params;
    if (!roleName || !departmentName) {
        return res.status(400).json({ message: "Role and department are required" });
    }
    db.query(
        "UPDATE signindetails SET roleName = ?, departmentName = ? WHERE id = ?",
        [roleName, departmentName, id],
        (err) => {
            if (err) return res.status(500).json({ message: "Error updating role assignment", error: err });
            return res.status(200).json({ message: "Role assigned successfully" });
        }
    );
});

// ---------- START SERVER ----------
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});








