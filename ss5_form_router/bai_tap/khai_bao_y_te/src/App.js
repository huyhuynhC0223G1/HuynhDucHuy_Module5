import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from 'yup';
import "./App.css";

function App() {
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        // workingCompany, workingParts
        initialValues={{ name: "", idCard: "", brithday: "", nationality: "", province: "", district: "", wards: "", villages: "", email: "", phone: "" }}
        validationSchema={yup.object({
          name: yup.string().required("Required"),
          idCard: yup.string().required("Required"),
          brithday: yup.number().required("Required").min(1900, " >1900"),
          nationality: yup.string().required("Required"),
          province: yup.string().required("Required"),
          district: yup.string().required("Required"),
          wards: yup.string().required("Required"),
          villages: yup.string().required("Required"),
          email: yup.string().required("Required").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address"),
          phone: yup.string().required("Required").length(10),

        })}
        onSubmit={() => {
          alert("Login in successfully!!!");
        }}
      >
        <Form>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="name">Name:</label></td>
                <td><Field id="name" type="text" name="name"></Field></td>
                <td> <ErrorMessage name="name" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="idCard">Id Card:</label></td>
                <td><Field id="idCard" type="text" name="idCard"></Field></td>
                <td><ErrorMessage name="idCard" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="brithday">Brithday</label></td>
                <td><Field id="brithday" type="text" name="brithday"></Field></td>
                <td><ErrorMessage name="brithday" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="gender">Gender:</label></td>
                <td> <Field id="gender" type="radio" name="gender" />Male</td>
                <td><Field id="gender" type="radio" name="gender" />Female</td>
              </tr>
              <tr>
                <td><label htmlFor="nationality">nationality:</label></td>
                <td><Field id="nationality" type="text" name="nationality"></Field></td>
                <td><ErrorMessage name="nationality" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="workingCompany"> Working Company:</label></td>
                <td> <Field id="workingCompany" type="text" name="workingCompany"></Field></td>
              </tr>
              <tr>
                <td> <label htmlFor="workingParts">workingParts:</label></td>
                <td><Field id="workingParts" type="text" name="workingParts"></Field></td>
              </tr>
              <tr>
                <td><label htmlFor="healthInsurance">Have a health insurance card:</label></td>
                <td><Field id="healthInsurance" type="checkbox" name="healthInsurance"></Field></td>
              </tr>
              <tr>
                <td><label htmlFor="province">province</label></td>
                <td><Field id="province" type="text" name="province"></Field></td>
                <td><ErrorMessage name="province" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="district">district</label></td>
                <td><Field id="district" type="text" name="district"></Field></td>
                <td><ErrorMessage name="district" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="wards">wards</label></td>
                <td> <Field id="wards" type="text" name="wards"></Field></td>
                <td> <ErrorMessage name="wards" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td> <label htmlFor="villages">villages</label></td>
                <td><Field id="villages" type="text" name="villages"></Field></td>
                <td><ErrorMessage name="villages" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td> <label htmlFor="email">Email</label></td>
                <td> <Field id="email" type="text" name="email"></Field></td>
                <td> <ErrorMessage name="email" component="div" className="text-red"></ErrorMessage></td>
              </tr>
              <tr>
                <td><label htmlFor="phone">Phone</label></td>
                <td><Field id="phone" type="text" name="phone"></Field></td>
                <td><ErrorMessage name="phone" component="div" className="text-red"></ErrorMessage></td>
              </tr>
            </tbody>
          </table>
          <p>In the past 14 days, have you had any of the following symptoms?</p>
          <div> <label> <Field type="checkbox" name="testimony" value="Fever" /> Fever </label>
            <label> <Field type="checkbox" name="testimony" value="Cough" /> Cough </label>
            <label> <Field type="checkbox" name="testimony" value="Shortness of breath" /> Shortness of breath </label>
            <label> <Field type="checkbox" name="testimony" value="Sore throat" /> Sore throat </label>
            <label> <Field type="checkbox" name="testimony" value="Pneumonia" /> Pneumonia </label>
            <label> <Field type="checkbox" name="testimony" value="Fatigue" /> Fatigue </label>
          </div> <ErrorMessage name="testimony" component="div" />

          <div>
            <p>In the past 14 days, have you had close contact with anyone who has:</p>
            <div>
              <label> <Field type="checkbox" name="contact" value="COVID-19 confirmed or suspected case" /> COVID-19 confirmed or suspected case </label>
              <label> <Field type="checkbox" name="contact" value="Traveled from a country with an outbreak" /> Traveled from a country with an outbreak </label>
              <label> <Field type="checkbox" name="contact" value="COVID-19 symptoms" /> COVID-19 symptoms </label>
            </div> <ErrorMessage name="contact" component="div" /> </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div >
  );
}

export default App;