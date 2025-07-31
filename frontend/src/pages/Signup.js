import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../pagescss/Signup.css';
import * as Yup from 'yup';
import axios from 'axios';

function Signup() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roleFromURL = queryParams.get('role') || "";  // 'provider' or 'customer'
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        phoneno: "",
        password: "",
        confirmPassword: "",
        role: roleFromURL,  // pre-fill from URL
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),

        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Enter a valid Gmail address")
            .required("Email is required"),

        phoneno: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
            .required("Phone number is required"),

        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                "Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 digit, and 1 special character"
            )
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Please confirm your password"),

        role: Yup.string().required("Please select a user type"),
    });

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/users', data).then((response) => {
            console.log("User registered:", data);
            if (data.role === "provider") {
                navigate("/provider-form"); // 👈 go to extra form
            } else {
                alert("Sign Up Successful!");
            }
        });
    };

    return (
        <div className="signup">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
                <Form className="formContainer">
                    <label>Name</label>
                    <ErrorMessage name="name" component="span" />
                    <Field id="inputName" name="name" placeholder="Full Name" />

                    <label>Email</label>
                    <ErrorMessage name="email" component="span" />
                    <Field id="inputEmail" name="email" placeholder="xyz@gmail.com" />

                    <label>Phone Number</label>
                    <ErrorMessage name="phoneno" component="span" />
                    <Field id="inputPhone" name="phoneno" placeholder="9876543210" />

                    <label>Password</label>
                    <ErrorMessage name="password" component="span" />
                    <Field id="inputPassword" name="password" type="password" placeholder="Enter password" />

                    <label>Confirm Password</label>
                    <ErrorMessage name="confirmPassword" component="span" />
                    <Field id="inputConfirmPassword" name="confirmPassword" type="password" placeholder="Re-enter password" />

                    <label>User Type</label>
                    <ErrorMessage name="role" component="span" />
                    <Field as="select" id="inputRole" name="role">
                        <option value="" disabled hidden>Select user type</option>
                        <option value="provider">Service Provider</option>
                        <option value="customer">Service Seeker</option>
                    </Field>

                    <button type="submit">Sign Up</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Signup;
