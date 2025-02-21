import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../styles/login.css"; // Import CSS

const Login = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert(`Login Successful!\nUser ID: ${formData.userId}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          {/* User ID Field */}
          <div className="input-group">
            <label>User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your User ID"
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>

          {/* Forgot Password */}
          <p className="forgot-password">
            Forgot password? <a href="#">Reset here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
