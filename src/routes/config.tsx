import React from "react";
import Landing from "pages/Landing";
// import CardsList from "pages/cardsList/CardsList";
import { SignIn, SignUp } from "pages/auth";
import Dictionaries from "pages/dictionaries/Dictionaries";
// import NotFound from "pages/404/404";
export enum RouteType {
  NotFound,
}
interface IRouteDetail {
  exact: boolean;
  path: string;
  isPrivate: boolean;
  component: (props?: any) => JSX.Element;
  type?: RouteType;
}
export const routes = {
  landing: "/landing",
  signIn: "/signIn",
  signUp: "/signUp",
  // dictionaries: "/dictionaries",
  root: "/",
};
export const redirectTo = routes.landing;
export const rootPages = [routes.landing, routes.root];
export const defaultDirectedPage: IRouteDetail = {
  exact: true,
  path: redirectTo,
  isPrivate: false,
  component: (props) => <Landing {...props} />,
};

export const routeDetails: IRouteDetail[] = [
  defaultDirectedPage,
  {
    exact: true,
    path: routes.root,
    isPrivate: true,
    component: (props) => <Dictionaries {...props} />,
  },
  {
    exact: true,
    path: routes.signIn,
    isPrivate: false,
    component: (props) => <SignIn {...props} />,
  },
  {
    exact: true,
    path: routes.signUp,
    isPrivate: false,
    component: (props) => <SignUp {...props} />,
  },
];
