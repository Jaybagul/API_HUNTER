import axios from 'axios';
import { useFormik } from 'formik';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { ContextDataProvider } from "../Context/AuthContext";
import "./Login.css";


const initialValues = {
  email: "",
  password: ""
}

function Login() {

  const formValidation = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).required("Password is required minimum 4 length")
  })

  const { LoginUser } = useContext(ContextDataProvider);

  const navigate = useNavigate();
  
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema: formValidation,
    onSubmit: async (value, action) => {
      let userdata = await axios.post("https://reqres.in/api/login", value);
      LoginUser(userdata.data.token);
      navigate('/dashboard');
      action.resetForm();
    }
  });


  return (
    <div>
      <form data-testid="login-form" className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input id="email" value={values.email} name="email" data-testid="email-input" type="email" placeholder="email" onChange={handleChange} style={{ border: errors.email && "2px solid red" }} />

        </div>
        <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            value={values.password}
            name="password"
            data-testid="password-input"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
