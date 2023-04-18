import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setIsSent(true);
      setSubmitting(false);
    }, 400);
  };
  const resetForm = () => {
    setIsSent(false);
  };

  return (
    <div className="container mx-auto py-10">
      {isSent ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Thank you for contacting us!</h1>
          <p className="mb-6">
            We have received your message and will get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-teal-500">Contact Us</h1>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              message: Yup.string().required('Required'),
            })}
            onSubmit={handleFormSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  />
                  <ErrorMessage name="name" className="text-red-500" />
                </div>
  
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  />
                  <ErrorMessage name="email" className="text-red-500" />
                </div>
  
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                  />
                  <ErrorMessage name="message" className="text-red-500" />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-white bg-teal-500 rounded-md disabled:bg-gray-400 hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
            }
export default Contact