import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { routes } from "routes/config";
interface INotAuthedLayout {
  children: React.ReactNode;
}

const NotAuthedLayout: React.SFC<INotAuthedLayout> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          bgcolor="primary.main"
          height={"60px"}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box display="flex" justifyContent="center" mr={3}>
            <Box p={1}>
              <Link to={routes.signIn}>Sign In</Link>
            </Box>
            <Box p={1}>
              <Link to={routes.signUp}>Sign up</Link>
            </Box>
          </Box>
        </Box>
        {children}
      </Grid>
    </Grid>
  );
};
export default NotAuthedLayout;
