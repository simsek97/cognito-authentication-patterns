/* export by name */
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator, CheckboxField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/* configure cognito and allows connection to aws amplify within my aws account*/
import awsExports from 'aws-exports'; /*export by default*/

import Home from "Home"; //*importing our homepage attributes from Home.tsx

Amplify.configure(awsExports); // setting up the various AWS resources that we want to work with


// defining function using const instead of function()
// makes function immutable & allows for fat arrow syntax
const App = () => {
  return (
    <Authenticator // calling authenticator from amplify
      initialState="signUp" // setting intial state of webpage
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              <>
                {/* use the default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* adds terms and conditions and requires in order to sign up */}
                <CheckboxField
                  errorMessage={validationErrors.acknowledgement as string}
                  hasError={!!validationErrors.acknowledgement}
                  name="acknowledgement"
                  value="yes"
                  label="I agree with the Terms & Conditions."
                />
              </>
            );
          },
        },
      }}

      
      // requires user to accept terms and conditions to create account
      services={{ 
        async validateCustomSignUp(formData) {
          if (!formData.acknowledgement) {
            return {
              acknowledgement: 'You must agree to the Terms & Conditions',
            };
          }
        },
      }}
    >

    {/* creates home page */}
      {({ signOut, user }) => (
          <Home myUser={user} userSignout={signOut} />
      )}
    </Authenticator>
  );
}

export default App;
