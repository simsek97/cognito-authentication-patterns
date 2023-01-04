import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import * as React from "react";

import Login from "./Login";

const Home = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const getUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    };

    getUser();
  }, []);

  return (
    (user && (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Cognito Patterns
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Box>
    )) || <Login />
  );
};

export default Home;
