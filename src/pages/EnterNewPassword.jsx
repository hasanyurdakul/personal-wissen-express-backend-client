import React, { useState } from "react";
import background from "../assets/images/background.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo_no_background from "../assets/images/logo_no_background.png";

const loginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords are not matching"
  ),
});

function EnterNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = ({ password, confirmPassword }) => {
    let requestObject = { password, confirmPassword };
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
              <h1 className="font-bold text-xl text-slate-400">
                Enter New Password
              </h1>

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
                Confirm
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default EnterNewPassword;
