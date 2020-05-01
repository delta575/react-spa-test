import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 2, 100, 12),
    fontFamily: "Roboto",
  },
  card: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "21vw",
    height: "21vw",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 22,
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
  footer: {
    flex: 1,
    padding: theme.spacing(2, 0),
    textAlign: "right",
    justifyContent: "flex-end",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Cute Dog
              </Typography>
              <Typography className={classes.subtitle}>Animals</Typography>
              <Typography className={classes.pos} color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
              <Divider />
              <Grid container className={classes.footer} spacing={1}>
                <Grid item>
                  <Avatar variant="circle"></Avatar>
                </Grid>
                <Grid item>
                  <Typography>Matt</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
