import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../redux_store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
    fontFamily: "Roboto",
  },
  card: {
    flex: 1,
    textAlign: "right",
    justifyContent: "flex-end",
  },
  button: {
    padding: theme.spacing(1, 5),
    textAlign: "center",
  },
  bottom: {
    textAlign: "center",
    flex: 1,
    padding: theme.spacing(100, 0),
    justifyContent: "flex-end",
    marginBottom: 56,
  },

  counter: {
    textAlign: "center",
    padding: theme.spacing(0, 0),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const clickCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <Grid container spacing={1} className={classes.card}>
        <Grid item>
          <Typography variant="h6">Hi Martin </Typography>
          <Typography variant="caption">AMCP Corp</Typography>
        </Grid>
        <Grid item>
          <Avatar variant="rounded"></Avatar>
        </Grid>
      </Grid>

      <Divider />
      <Box className={classes.counter}>
        <Typography>Redux Clicks Counter: {clickCount}</Typography>
      </Box>
      <Box className={classes.bottom}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => dispatch(incrementCounter())}
        >
          Action Button
        </Button>
      </Box>
    </Box>
  );
}
