import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../pagescss/Signup.css';


function Signup() {
    return (
        <div className="signup">
            <Formik>
                <Form className="formContainer">
                    <label>Name</label>
                    <Field id="inputName" name="name" placeholder="Full Name" />

                    <label>Email</label>
                    <Field id="inputEmail" name="email" placeholder="xyz@gmail.com" />

                    <label>Phone Number</label>
                    <Field id="inputPhone" name="phoneno" placeholder="9876543210" />

                    <label>Password</label>
                    <Field id="inputPassword" name="password" type="password" placeholder="Enter password" />

                    <label>Confirm Password</label>
                    <Field id="inputConfirmPassword" name="confirmPassword" type="password" placeholder="Re-enter password" />

                    <label>User Type</label>
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
