import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux_store/reducers";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Dashboard from "./components/dashboard";
import Clients from "./components/tool1";
import Stats from "./components/tool2";
import Products from "./components/tool3";
import MiniDrawer from "./components/minidrawer";
import Profile from "./components/profile";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />

        <Grid container>
          <Hidden>
            <Grid item xl>
              <Box boxShadow={3}>
                <Route path="/" component={MiniDrawer}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
                <Route path="/Tool1" component={Clients}></Route>
                <Route path="/Tool2" component={Stats}></Route>
                <Route path="/Tool3" component={Products}></Route>
              </Box>
            </Grid>
          </Hidden>

          <Hidden mdDown>
            <Grid item xs={3}>
              <Box justifyContent="flex-end" flex={1} flexDirection="column">
                <Route path="/" component={Profile}></Route>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Provider>
    </React.Fragment>
    );
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
