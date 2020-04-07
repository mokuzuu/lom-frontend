import React from "react";
import Header from "components/header/TheHeader";
import UseStylesGlobal from "styles/useStyles";
import { useTabletHook } from "hooks/isTablet";
import SideBarGroup from "components/sideBar/TheSideBarGroup";
import Footer from "components/footer/TheFooter";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import { Navs } from "components/types";

interface IProps {
  children: React.ReactNode;
  navIcons: Navs;
}

const BaseLayout: React.SFC<IProps> = ({ children, navIcons }, props) => {
  const globalClasses = UseStylesGlobal();
  const classes = useStyles();
  const isTablet = useTabletHook();

  return (
    <div className={globalClasses.app}>
      <Header />
      <main className={classes.main}>{children}</main>
      {isTablet ? (
        <Footer navs={navIcons} />
      ) : (
        <div className={classes.sideBar}>
          <SideBarGroup navs={navIcons} />
        </div>
      )}
    </div>
  );
};

export default BaseLayout;

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: variables.header.height,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "180px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: variables.footer.height,
    },
  },
  sideBar: {
    zIndex: variables.zIndex.sideBar,
    width: "180px",
    bottom: "0px",
    left: "0px",
    position: "fixed",
    top: "0px",
    margin: "0",
    padding: "0",
    backgroundColor: variables.color.primary,
  },
}));
