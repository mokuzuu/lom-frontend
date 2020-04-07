import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import { useTabletHook } from "hooks/isTablet";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useLocation } from "react-router-dom";
import { rootPages } from "routes/config";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    routeName: state.app.routeName,
  };
};
interface IProps {
  history: any;
  routeName?: string;
}
export default connect(
  mapStateToProps,
  null
)(
  withRouter((props: IProps) => {
    const classes = useStyles();
    const isTablet = useTabletHook();
    const location = useLocation();

    return (
      <header className={classes.header}>
        {isTablet ? (
          <div className={classes.mobileHeader}>
            {rootPages.includes(location.pathname) ? (
              <div className={classes.desktopHeader}>{props.routeName}</div>
            ) : (
              <div className={classes.backButtonWrapper}>
                <ArrowBackIosIcon onClick={props.history.goBack} />
              </div>
            )}
          </div>
        ) : (
          <div className={classes.desktopHeader}>{props.routeName}</div>
        )}
      </header>
    );
  })
);

const useStyles = makeStyles((theme) => ({
  header: {
    width: variables.header.width,
    minHeight: variables.header.height,
    height: variables.header.height,
    color: variables.header.color,
    zIndex: variables.zIndex.header,
    position: "fixed",
    top: "0",
    left: "0",
    borderBottom: "0.5px solid grey",
    background: variables.header.bgColor,
    transition: "0.33s ease",
    transformOrigin: "50% 0",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "180px",
    },
  },
  mobileHeader: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    paddingLeft: "12px",
  },
  backButtonWrapper: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "8px",
  },
  desktopHeader: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
}));
