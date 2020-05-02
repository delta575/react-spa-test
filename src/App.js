import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import "typeface-roboto";
import Drawer from "./components/Drawer";
import Profile from "./components/Profile";
import rootReducer from "./redux_store/reducers";
import Dashboard from "./views/Dashboard";
import Tool from "./views/Tool";

const store = createStore(rootReducer);

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Provider store={store}>
        <BrowserRouter>
          <Drawer />
          <main className={classes.content}>
            <Box display="flex" height="100%">
              <Box px={3} flex={1} boxShadow={8}>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/tool1" component={Tool}></Route>
                <Route exact path="/tool2" component={Tool}></Route>
                <Route exact path="/tool3" component={Tool}></Route>
              </Box>

              <Hidden smDown>
                <Box minWidth="320px">
                  <Profile />
                </Box>
              </Hidden>
            </Box>
          </main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
