import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  card: {
    height: "100%",
    minHeight: "200px",
  },
}));

export default function Tool1() {
  const classes = useStyles();

  return (
    <Box>
      <Box pt={2} pb={4}>
        <Typography className={classes.title}>Tool</Typography>
      </Box>
      <Card className={classes.card}></Card>
    </Box>
  );
}
