// import React from "react";
// import List from "components/abstracts/list/BaseList";
// import { getCharacters } from "apis/characters";
// import {
//   Route,
//   useRouteMatch,
//   Switch,
//   RouteComponentProps,
// } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";
// import { useTabletHook } from "hooks/isTablet";
// // import HeroDetail from "./HeroDetail";
// import { connect } from "react-redux";
// import { UPDATE_ROUTE_NAME } from "store/index";
// import { withRouter } from "react-router-dom";
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     updateRouteName: (name: string) =>
//       dispatch({ type: UPDATE_ROUTE_NAME, name }),
//   };
// };
// interface IProps extends RouteComponentProps<{ id: string }> {
//   history: any;
//   updateRouteName: Function;
// }
// export interface Character {
//   name?: string;
//   description?: string;
//   thumbnail?: string;
//   comics?: {
//     resourceURI: string;
//     name: string;
//   }[];
//   series?: {
//     resourceURI: string;
//     name: string;
//   }[];
//   stories?: {
//     resourceURI: string;
//     name: string;
//   }[];
// }
// export default connect(
//   null,
//   mapDispatchToProps
// )(
//   withRouter((props: IProps) => {
//     const [characters, setCharacters] = React.useState<any[]>([]);

//     const classes = useStyles();
//     const isTablet = useTabletHook();
//     const { path, url } = useRouteMatch();
//     const fetch = (offset: number) => {
//       return getCharacters(offset).then((res) => {
//         const { data } = res;
//         setCharacters((prevState) => [
//           ...prevState,
//           ...data.results.map(
//             (val: {
//               id: string;
//               name: string;
//               description: string;
//               thumbnail: {
//                 path: string;
//                 extension: string;
//               };
//             }) => ({
//               to: `${url}/${val.id}`,
//               id: val.id,
//               name: val.name,
//               description: val.description,
//               thumbnail: `${val.thumbnail.path}/portrait_small.${val.thumbnail.extension}`,
//             })
//           ),
//         ]);
//         return res;
//       });
//     };
//     React.useEffect(() => {
//       props.updateRouteName("Hero List");
//     });
//     return (
//       <div className={classes.container}>
//         <div className={classes.listWrapper}>
//           <List items={characters} fetch={fetch} />
//         </div>
//         {!isTablet && (
//           <div className={classes.detailWrapper}>
//             <Switch>
//               <Route path={`${path}/:id`}>{/* <HeroDetail /> */}</Route>
//             </Switch>
//           </div>
//         )}
//       </div>
//     );
//   })
// );

// const useStyles = makeStyles((theme) => ({
//   container: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//   },
//   listWrapper: {
//     flex: "1",
//     [theme.breakpoints.up("sm")]: {
//       borderRight: "1px solid grey",
//     },
//   },
//   detailWrapper: {
//     flex: "1.5",
//   },
//   progressWrapper: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// }));

import React from "react";
export default () => {
  return <></>;
};
