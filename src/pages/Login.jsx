import React, { useState } from "react";
import background from "../assets/images/background.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import logo_no_background from "../assets/images/logo_no_background.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/features/userSlice";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleLogin = ({ username, password }) => {
    let requestObject = { username, password };
    axios
      .post(`${API_BASE_URL}/user/login`, requestObject)
      .then((response) => {
        // console.log(response);
        dispatch(userLogin(response.data.user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <div>
            <div className="flex flex-col max-w-96 w-96 gap-2 bg-slate-100 p-10 rounded-xl">
              <Link to="/">
                <img
                  src={logo_no_background}
                  alt=""
                  className="mx-auto max-h-16 mb-2"
                />
              </Link>
              <h1 className="font-bold text-2xl text-slate-400">Login</h1>
              <TextField
                id="input-username"
                name="username"
                label="Username"
                variant="outlined"
                onChange={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                helperText={touched.username && errors.username}
                error={touched.username && Boolean(errors.username)}
              />
              <TextField
                id="input-password"
                type={isVisible ? "text" : "password"}
                name="password"
                label="Password"
                variant="outlined"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className="cursor-pointer"
                      onClick={() => {
                        setIsVisible(!isVisible);
                      }}
                    >
                      {isVisible ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Login
              </Button>
              <div className="flex flex-col">
                <span className="text-right flex gap-2 justify-end items-end">
                  <small>You don't have an account?</small>
                  <small>
                    <Link
                      className="text-right hover:underline text-blue-600  "
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </small>
                </span>
                <span className="text-right flex gap-2 justify-end items-end">
                  <small>
                    <Link
                      className="text-right hover:underline text-blue-600  "
                      to={"/forgot-password"}
                    >
                      Forgot your password?
                    </Link>
                  </small>
                </span>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Login;
