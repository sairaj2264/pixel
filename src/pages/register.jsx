import { useState } from "react";
import "../styles/register.css"; // Import CSS

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    disorder: "",
  });

  const disorderOptions = ["Anxious", "Depressed", "Bipolar", "Lonely"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting data:", formData); // ✅ Check if data is correct

    if (!formData.username || !formData.phoneNumber || !formData.password) {
      console.log("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data); // ✅ Check server response

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.log(data.error || "Error registering user.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      console.log("Failed to connect to server.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>

        <form onSubmit={handleSubmit} className="register-form">
          {/* Username Field */}
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Disorder Dropdown */}
          <div className="input-group">
            <label>Disorder</label>
            <select
              name="disorder"
              value={formData.disorder}
              onChange={handleChange}
              required
            >
              <option value="">Select a disorder</option>
              {disorderOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
