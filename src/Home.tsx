import React from 'react';
import PropTypes from "prop-types";
import { CognitoUserAmplify } from '@aws-amplify/ui';
type HomeProps = {
    myUser: CognitoUserAmplify,
    userSignout?: ()=> void
}
const Home = (props: HomeProps) => {
    const { myUser, userSignout } = props;

    return (
        <main>
          <h1>Hello {myUser?.username || "User"}</h1>
          <button onClick={userSignout}>Sign out</button>
        </main>
    )

}

export default Home;