import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const initialValues = {
    userId: '',
    password: '',
    name: '',
    address: '',
    country: '',
    zipCode: '',
    email: '',
    sex: '',
    language: [],
    about: '',
  };

  const validationSchema = Yup.object({
    userId: Yup.string()
      .required('Required and must be of length 5 to 12.')
      .min(5, 'Must be at least 5 characters.')
      .max(12, 'Must be 12 characters or less.'),
    password: Yup.string()
      .required('Required and must be of length 7 to 12.')
      .min(7, 'Must be at least 7 characters.')
      .max(12, 'Must be 12 characters or less.'),
    name: Yup.string()
      .required('Required and alphabets only.')
      .matches(/^[A-Za-z]+$/, 'Must contain only alphabets.'),
    address: Yup.string(),
    country: Yup.string().required('Required. Must select a country.'),
    zipCode: Yup.number()
      .required('Required. Must be numeric only.')
      .typeError('Must be numeric.'),
    email: Yup.string().email('Must be a valid email.').required('Required.'),
    sex: Yup.string().required('Required.'),
    language: Yup.array().min(1, 'Required.'),
    about: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log('Form Data:', values);
    alert('Form submitted successfully!');
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label>User ID:</label>
            <Field name="userId" type="text" className="form-control" />
            <ErrorMessage name="userId" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <Field name="address" type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Country:</label>
            <Field as="select" name="country" className="form-control">
              <option value="">(Please select a country)</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              
            </Field>
            <ErrorMessage name="country" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>ZIP Code:</label>
            <Field name="zipCode" type="text" className="form-control" />
            <ErrorMessage name="zipCode" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Sex:</label>
            <div className="radio-group">
              <label>
                <Field type="radio" name="sex" value="Male" /> Male
              </label>
              <label>
                <Field type="radio" name="sex" value="Female" /> Female
              </label>
            </div>
            <ErrorMessage name="sex" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Language:</label>
            <div className="checkbox-group">
              <label>
                <Field type="checkbox" name="language" value="English" /> English
              </label>
              <label>
                <Field type="checkbox" name="language" value="Non English" /> Non English
              </label>
            </div>
            <ErrorMessage name="language" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>About:</label>
            <Field as="textarea" name="about" className="form-control" />
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;