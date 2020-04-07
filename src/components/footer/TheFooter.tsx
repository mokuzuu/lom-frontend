import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import FooterButton from "./TheFooterButton";
import { Navs } from "components/types";
interface IProps {
  navs: Navs;
}
export default (props: IProps) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {props.navs.map(
        (nav, key) =>
          nav.isMobileView ?? (
            <FooterButton icon={nav.icon} click={nav.click} key={key} />
          )
      )}
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    zIndex: variables.zIndex.footer,
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: variables.footer.height,
    display: "flex",
    alignItems: "center",
  },
}));
