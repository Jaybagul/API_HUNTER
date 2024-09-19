// Login.jsx

import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";


function Login() {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      loginUser(response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
        {error && <p>{error}</p>}
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Login;
