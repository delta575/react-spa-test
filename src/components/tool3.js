import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 2, 100, 12),
    fontFamily: "Roboto",
  },
  card: {
    flexGrow: 1,
    padding: theme.spacing(13, 13),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Tool3() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Products</Typography>
      <Card className={classes.card}></Card>
    </Box>
  );
}
