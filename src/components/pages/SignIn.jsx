import React from 'react';
import AuthLayout from '../Layouts/AuthLayout';
import FormSignIn from '../Fragments/FormSignIn';   

function SignIn() {
  return (
    <AuthLayout> 
        <FormSignIn />
    </AuthLayout>
  );
}

export default SignIn;