import React from 'react';
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';
import { Link } from "react-router-dom";
import { useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignIn({ onSubmit }) {

  return (
    <>
        {/* form start */}
        <div className = "mt-16">
        <Formik
  initialValues={{
    email: "",
    password: "",
    status: false,
  }}
  validationSchema={SignInSchema}
  onSubmit={async (values, { setSubmitting }) => {
    try {
      await onSubmit(values.email, values.password);
    } finally {
      setSubmitting(false);
    }
  }}
>
  {({ isSubmitting }) => (
    <Form>

      <div className="mb-6">
        <Field name="email">
          {({ field }) => (
            <LabeledInput
              {...field}
              id="email"
              type="email"
              label="Email Address"
              placeholder="hello@example.com"
            />
          )}
        </Field>

        <ErrorMessage
          name="email"
          component="p"
          className="text-red-500 text-xs mt-1"
        />
      </div>


      <div className="mb-6">
        <Field name="password">
          {({ field }) => (
            <LabeledInput
              {...field}
              id="password"
              type="password"
              label="Password"
              placeholder="●●●●●●●●●●●●●●"
            />
          )}
        </Field>

        <ErrorMessage
          name="password"
          component="p"
          className="text-red-500 text-xs mt-1"
        />
      </div>


      <div className="mb-3">
        <Field name="status">
          {({ field }) => (
            <CheckBox
              {...field}
              id="status"
              type="checkbox"
              checked={field.value}
              label="Keep me signed in"
            />
          )}
        </Field>
      </div>


      <Button>
        {isSubmitting ? "Loading..." : "Login"}
      </Button>

    </Form>
  )}
</Formik>
</div> </> )}

export default FormSignIn;