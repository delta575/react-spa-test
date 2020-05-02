import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../redux_store/actions";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1, 5),
    textAlign: "center",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const clickCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box
      py={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <Box
          px={3}
          pb={2}
          justifyContent="flex-end"
          display="flex"
          alignItems="center"
        >
          <Box pr={2} textAlign="right">
            <Typography variant="h6">Hi Martin </Typography>
            <Typography variant="caption">AMCP Corp</Typography>
          </Box>
          <Avatar variant="rounded"></Avatar>
        </Box>

        <Divider />
        <Box my={2} textAlign="center">
          <Typography>Redux Clicks Counter: {clickCount}</Typography>
        </Box>
      </Box>
      <Box mx="auto" mb={3}>
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
