import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
//import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";





export const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data to populate the form
  const getUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setError("Failed to fetch user data.");
      }
    } catch (err) {
      setError("An error occurred while fetching user data.");
    }
  };

  useEffect(() => {
    getUserData();
  }, [id]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate("/admin/users");
        toast.success("Updated Successfully");
      } else {
        setError("Failed to update user.");
        toast.error("Not Updated")
      }
    } catch (err) {
      setError("An error occurred while updating the user.");
    }
    setLoading(false);
  };

  return (
    <div className="edit-user-form">
      <h2>Edit User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update User"}
        </button>
      </form>
    </div>
  );
};
