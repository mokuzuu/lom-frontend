import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { routes, routeDetails, redirectTo, RouteType } from "./config";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {
  AuthedBaseLayout,
  NotAuthedBaseLayout,
} from "components/abstracts/layout";
import { signOutUser, testAuth } from "apis/auth";
import { Navs } from "components/types";
import { AuthAction } from "store";
import { RouteComponentProps } from "react-router-dom";
const navIcons: Navs = [
  {
    title: "List",
    click: (history: any) => history.push(routes.root),
    icon: <ListAltIcon />,
    isMobileView: true,
  },
  {
    title: "sign out",
    isMobileView: false,
    click: async (history: any) => {
      const result = await signOutUser();
      if (result.status === 200) {
        localStorage.setItem("Authorized", AuthAction.SignOut);
        return history.push(routes.landing);
      } else {
        alert("Log out was unsuccessfult");
      }
    },
  },
  {
    title: "test auth",
    isMobileView: false,
    click: async (history: any) => {
      const result = await testAuth();
      if (result.status === 200) {
        alert(result.data.message);
      }
    },
  },
];

interface IRoutes {
  customHistory: RouteComponentProps["history"];
}
const Routes: React.SFC<IRoutes> = ({ customHistory }) => {
  return (
    <Router history={customHistory}>
      <Switch>
        {routeDetails.map((detail, idx) => {
          return (
            <Route
              key={idx}
              exact={detail.exact}
              path={detail.path}
              render={(props) => {
                if (detail.type === RouteType.NotFound) {
                  return detail.component(props);
                } else {
                  if (detail.isPrivate) {
                    if (
                      localStorage.getItem("Authorized") === AuthAction.SignIn
                    )
                      return (
                        <AuthedBaseLayout navIcons={navIcons}>
                          {detail.component(props)}
                        </AuthedBaseLayout>
                      );
                    else
                      return (
                        <Redirect
                          to={{
                            pathname: redirectTo,
                          }}
                        />
                      );
                  } else {
                    return (
                      <NotAuthedBaseLayout>
                        {detail.component(props)}
                      </NotAuthedBaseLayout>
                    );
                  }
                }
              }}
            />
          );
        })}
        <Redirect
          to={{
            pathname: redirectTo,
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
