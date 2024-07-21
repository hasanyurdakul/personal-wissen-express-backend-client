import React, { useState } from "react";
import background from "../assets/images/background.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo_no_background from "../assets/images/logo_no_background.png";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = ({ username, password }) => {
    let requestObject = { username, password };
    console.log(requestObject);
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
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
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
              <h1 className="font-bold text-2xl text-slate-400">Register</h1>

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
                id="input-email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
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
              <TextField
                id="input-confirm-password"
                type={isVisible ? "text" : "password"}
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
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
                Register
              </Button>
              <div className="flex flex-col">
                <span className="text-right flex gap-2 justify-end items-end">
                  <small>Already have an account?</small>

                  <small>
                    <Link
                      className="text-right hover:underline text-blue-600  "
                      to={"/login"}
                    >
                      Login
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

export default Register;
