import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { toggleDrawer } from "../redux_store/actions";

function ListItemLink(props) {
  const { to, text, icon } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const open = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Box display="flex" justifyContent="center" my={2}>
        <IconButton onClick={() => dispatch(toggleDrawer())}>
          {open ? <ChevronLeftIcon /> : <PersonIcon />}
        </IconButton>
      </Box>
      <List>
        <ListItemLink
          to="/dashboard"
          text="Dashboard"
          icon={<DashboardIcon />}
        />
        <ListItemLink
          to="/tool1"
          text="PermDataSettings"
          icon={<PermDataSettingIcon />}
        />
        <ListItemLink to="/tool2" text="SettingsIcon" icon={<SettingsIcon />} />
        <ListItemLink
          to="/tool3"
          text="Settings"
          icon={<SettingsInputComponentIcon />}
        />
      </List>
    </Drawer>
  );
}
