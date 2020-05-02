import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    minHeight: "200px",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 18,
    color: "gray",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Box>
      <Box pt={2} pb={4}>
        <Typography className={classes.title}>Dashboard</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.cardTitle}>Cute Dog</Typography>
              <Typography className={classes.cardSubtitle}>Animals</Typography>
              <Box py={1}>
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </Box>
              <Divider />
              <Box pt={2} display="flex" justifyContent="flex-end">
                <Box display="flex" alignItems="center">
                  <Avatar variant="circle"></Avatar>
                  <Box pl={1}>
                    <Typography>Matt</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className={classes.card}></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
