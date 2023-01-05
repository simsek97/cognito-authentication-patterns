import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handlesignIn = async () => {
    try {
      const response = await Auth.signIn(email, password);
      console.log(response);

      navigate("/");
    } catch (error) {
      console.log("An error occurred: ", error.code);
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <form>
        <Card sx={{ padding: "16px", maxWidth: "400px" }}>
          <CardHeader title="Sign-In" />

          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="email"
            placeholder="Email Address"
            label="Email Address"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            sx={{ marginBottom: "16px" }}
            type="password"
            fullWidth
            name="password"
            placeholder="Password"
            label="Password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button variant="contained" onClick={handlesignIn}>
            Sign In
          </Button>
        </Card>
      </form>
    </Box>
  );
};

export default SignIn;
