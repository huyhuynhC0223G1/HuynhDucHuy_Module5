import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from 'yup';
import "./App.css";

function App() {
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={yup.object({
          name: yup.string().required("Required"),
          email: yup.string().required("Required").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address"),
          phone: yup.string().required("Required").length(10),
          message: yup.string().required("Required"),
        })}
        onSubmit={() => {
          alert("Login in successfully!!!");
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name"></Field>
            <ErrorMessage name="name" component="div" className="text-red"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" type="text" name="email"></Field>
            <ErrorMessage name="email" component="div" className="text-red"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field id="phone" type="text" name="phone"></Field>
            <ErrorMessage name="phone" component="div" className="text-red"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field id="message" type="text" name="message"></Field>
            <ErrorMessage name="message" component="div" className="text-red"></ErrorMessage>
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;