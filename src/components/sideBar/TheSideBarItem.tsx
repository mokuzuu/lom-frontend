import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
interface IProps {
  title: string;
  icon?: JSX.Element;
  click: Function;
}
export default (props: IProps) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <ListItem
      className={classes.sideBarMenuItem}
      button
      onClick={() => props.click(history)}
    >
      {props.icon ? (
        <>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {props.icon}
          </Box>
          <Box
            flex={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {props.title}
          </Box>
        </>
      ) : (
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {props.title}
        </Box>
      )}
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  sideBarMenuItem: {
    display: "flex",
    width: "60%",
    "& a": {
      diaplay: "flex",
      flexDirection: "row",
      padding: "84px",
      fontWeight: "200",
      fontSize: variables.fontSize.default,
      color: variables.color.primary,
      textDecoration: "none",
      "& hover": {
        color: variables.color.primary,
        backgroundColor: "#ececee",
      },
      "& i": {
        width: variables.space["24"],
        height: variables.space["24"],
        flex: "0 0 auto",
        marginRight: variables.space["12"],
      },
    },
  },
}));
