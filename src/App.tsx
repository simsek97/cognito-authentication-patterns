import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";

import awsExports from "aws-exports";
import HostedUIHome from "hosted-ui/Home";

Amplify.configure(awsExports);

const pattern = "hosted-ui";

const App = () => {
  if (pattern === "hosted-ui") {
    return (
      <Authenticator initialState="signIn">
        {({ signOut, user }) => <HostedUIHome user={user} signOut={signOut} />}
      </Authenticator>
    );
  }
};

const MyApp = () => {
  return <App />;
};

export default MyApp;
