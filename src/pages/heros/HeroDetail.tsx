// import React from "react";
// import { Character } from "./Heros";
// import {
//   Container,
//   Grid,
//   Typography,
//   ExpansionPanel,
//   ExpansionPanelSummary,
//   ExpansionPanelDetails,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
// import { useParams } from "react-router-dom";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { makeStyles } from "@material-ui/core/styles";
// import variables from "styles/variables";
// import { getCharacterById } from "apis/auth";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { useTabletHook } from "hooks/isTablet";
// import { ScreenTypes } from "utils/screenTypes";

// const getHeightInPx = (screenType: ScreenTypes) => {
//   if (screenType === ScreenTypes.Mobile) {
//     return (
//       (
//         document.documentElement.clientHeight -
//         parseInt(variables.footer.height, 10) -
//         parseInt(variables.header.height, 10)
//       ).toString() + "px"
//     );
//   } else if (screenType === ScreenTypes.Desktop) {
//     return (
//       (
//         document.documentElement.clientHeight -
//         parseInt(variables.header.height, 10)
//       ).toString() + "px"
//     );
//   }
// };

// interface IProps {}
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     [theme.breakpoints.up("xs")]: {
//       height: getHeightInPx(ScreenTypes.Mobile),
//     },
//     [theme.breakpoints.up("sm")]: {
//       height: getHeightInPx(ScreenTypes.Desktop),
//     },
//     overflow: "scroll",
//     "&::-webkit-scrollbar": {
//       display: "none",
//     },
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
//   container: {
//     marginTop: "3%",
//   },
// }));
// export default (props: IProps) => {
//   const classes = useStyles();
//   const { id } = useParams();
//   const [selectedCharacter, selectCharacter] = React.useState<Character | null>(
//     null
//   );
//   const [isDetailLoading, setDetailLoadingStatus] = React.useState(false);
//   const isTablet = useTabletHook();
//   React.useEffect(() => {
//     if (id) {
//       setDetailLoadingStatus(true);
//       getCharacterById(id)
//         .then((res) => {
//           const result = res.data.results[0];
//           selectCharacter({
//             name: result.name,
//             description:
//               result.description.length > 0
//                 ? result.description
//                 : "Description is not available...",
//             thumbnail: `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`,
//             comics: result.comics.items,
//             series: result.series.items,
//             stories: result.stories.items,
//           });
//           setDetailLoadingStatus(false);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [id]);

//   return (
//     <Container className={classes.root}>
//       {isDetailLoading ? (
//         <Grid container justify="center">
//           <CircularProgress color="secondary" />
//         </Grid>
//       ) : (
//         selectedCharacter !== null && (
//           <Grid container spacing={3} className={classes.container}>
//             {isTablet ? (
//               <React.Fragment>
//                 <Grid item xs={12}>
//                   <Typography variant="h5">{selectedCharacter.name}</Typography>
//                   <Typography variant="subtitle1">
//                     {selectedCharacter.description}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} justify="center" container>
//                   <img
//                     src={selectedCharacter.thumbnail}
//                     width="300"
//                     height="300px"
//                   />
//                 </Grid>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <Grid item xs={6}>
//                   <Typography variant="h5">{selectedCharacter.name}</Typography>
//                   <Typography variant="subtitle1">
//                     {selectedCharacter.description}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <img
//                     src={selectedCharacter.thumbnail}
//                     width="100%"
//                     height="auto"
//                   />
//                 </Grid>
//               </React.Fragment>
//             )}
//             <Grid item xs={12}>
//               <ExpansionPanel>
//                 <ExpansionPanelSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1a-content"
//                   id="panel1a-header"
//                 >
//                   <Typography className={classes.heading}>Comics</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                   <List component="nav" aria-label="main mailbox folders">
//                     {selectedCharacter.comics &&
//                       selectedCharacter.comics.map((comic, key) => (
//                         <ListItem key={key}>
//                           <ListItemText primary={comic.name} />
//                         </ListItem>
//                       ))}
//                   </List>
//                 </ExpansionPanelDetails>
//               </ExpansionPanel>
//               <ExpansionPanel>
//                 <ExpansionPanelSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel2a-content"
//                   id="panel2a-header"
//                 >
//                   <Typography className={classes.heading}>Series</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                   <List component="nav" aria-label="main mailbox folders">
//                     {selectedCharacter.series &&
//                       selectedCharacter.series.map((ind, key) => (
//                         <ListItem key={key}>
//                           <ListItemText primary={ind.name} />
//                         </ListItem>
//                       ))}
//                   </List>
//                 </ExpansionPanelDetails>
//               </ExpansionPanel>
//               <ExpansionPanel>
//                 <ExpansionPanelSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel3a-content"
//                   id="panel3a-header"
//                 >
//                   <Typography className={classes.heading}>Stories</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                   <List component="nav" aria-label="main mailbox folders">
//                     {selectedCharacter.stories &&
//                       selectedCharacter.stories.map((story, key) => (
//                         <ListItem key={key}>
//                           <ListItemText primary={story.name} />
//                         </ListItem>
//                       ))}
//                   </List>
//                 </ExpansionPanelDetails>
//               </ExpansionPanel>
//             </Grid>
//           </Grid>
//         )
//       )}
//     </Container>
//   );
// };

import React from "react";
export default () => {
  return <></>;
};
