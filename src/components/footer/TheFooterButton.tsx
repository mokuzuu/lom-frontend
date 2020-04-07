import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
interface IProps {
  icon?: JSX.Element;
  click: Function;
}
export default (props: IProps) => {
  const classes = useStyles();
  return (
    <button
      className={classes.footerNavIconWrapper}
      onClick={() => props.click}
    >
      <div className={classes.buttonWrapper}>{props.icon}</div>
    </button>
  );
};

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerNavIconWrapper: {
    "& button": {
      display: "block",
      padding: "0",
      margin: "0",
      "& a": {
        color: "white",
      },
      "& div": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    flex: "1",
    height: "100%",
    backgroundColor: variables.color.primary,
    color: "white",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 4px #999",
    outline: "none",
    "& svg": {
      display: "block",
      width: variables.space["24"],
      height: variables.space["24"],
    },
  },
}));
