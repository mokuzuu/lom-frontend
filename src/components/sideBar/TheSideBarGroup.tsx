import React from "react";
import SideBarItem from "./TheSideBarItem";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import List from "@material-ui/core/List";
import { Navs } from "components/types";
interface IProps {
  navs: Navs;
}
export default (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.sideBarGroup}>
      <List component="ul">
        {props.navs.map((nav, idx) => (
          <SideBarItem
            title={nav.title}
            icon={nav.icon}
            click={nav.click}
            key={idx}
          />
        ))}
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  sideBarGroup: {
    display: "flex",
    justifyContent: "center",
    "& ul": {
      padding: "0",
      color: "white",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& strong": {
      display: "block",
      fontWeight: variables.fontWeight.regular,
      fontSize: variables.fontSize.default,
      borderBottom: variables.space["4"],
      marginBottom: variables.space["12"],
    },
  },
}));
