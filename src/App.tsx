import { Amplify } from "aws-amplify";
import {
  Authenticator,
  useAuthenticator,
  CheckboxField,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "aws-exports";
import Home from "Home";

Amplify.configure(awsExports);

const App = () => {
  return (
    <Authenticator
      initialState="signIn"
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              <>
                <Authenticator.SignUp.FormFields />
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
      services={{
        async validateCustomSignUp(formData) {
          if (!formData.acknowledgement) {
            return {
              acknowledgement: "You must agree to the Terms & Conditions",
            };
          }
        },
      }}
    >
      {({ signOut, user }) => <Home myUser={user} userSignout={signOut} />}
    </Authenticator>
  );
};

export default App;
