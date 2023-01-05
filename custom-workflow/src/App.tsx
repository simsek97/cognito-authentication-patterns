import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";

import awsExports from "aws-exports";
import HostedUIHome from "hosted-ui/Home";
import CustomWorkflowHome from "custom-workflow/Home";

Amplify.configure(awsExports);

type TPattern = "hosted-ui" | "custom-workflow";
const pattern: TPattern = "custom-workflow";

const App = () => {
  // @ts-ignore
  if (pattern === "hosted-ui") {
    return (
      <Authenticator initialState="signIn">
        {({ user, signOut }) => <HostedUIHome user={user} signOut={signOut} />}
      </Authenticator>
    );
  } else if (pattern === "custom-workflow") {
    return <CustomWorkflowHome />;
  }
};

const MyApp = () => {
  return <App />;
};

export default MyApp;
