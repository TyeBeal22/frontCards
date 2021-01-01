import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from  '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import M from "../assets/M.png";
import DashboardIcon from '@material-ui/icons/Dashboard';



function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2.3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.6em"
    }

  },
  logo: {
    height: "6.3em",
    [theme.breakpoints.down("md")]: {
      height: "5.5em"
    },
    [theme.breakpoints.down("xs")]:{
      height: "4.5em"
    }

  },
  logoContainer: {
    padding: 0
  },
  tabContainer: {
    marginLeft: "3rem"

},

  tab: {
    fontFamily: "Raleway",
    minWidth: 12,
    padding: "1rem",

    "&:hover": {
      backgroundColor: "gold",
      borderRadius: "4rem",
      textDecoration: "none"
    }

  },
  button: {
      ...theme.typography.estimate,
      borderRadius: "50px",

  },
  drawerIcon : {
   height: "50px",
   width: "40px",
  },
  drawerIconContainer: {

    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.warning.light
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white"
  },
  appBar: {
    zIndex: theme.zIndex.modal +1
  }

}));


export default function Navbar(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

    const handleClick = e => {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
    };
  
    const handleMenuItemClick = (e, i) => {
      setAnchorEl(null);
      setOpenMenu(false);
      props.setSelectedIndex(i);
    };

    const handleClose = e => {
      setAnchorEl(null);
      setOpenMenu(false);
    };

    const menuOptions = [
      { name: "Shop", link: "/shop", activeIndex: 1, selectedIndex: 0 },
      { name: "Sign In", link: "/signin", activeIndex: 3, selectedIndex: 0 },
      { name: "Sign Up", link: "/signun", activeIndex: 4, selectedIndex: 0 },
    ];
  
    const routes = [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Shop",
        link: "/shop",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: event => handleClick(event)
      },
      { name: "Sign In", link: "/signin", activeIndex: 2 },
      { name: "Sign Up", link: "/signup", activeIndex: 3 }
    ];


    useEffect(() => {
      [...menuOptions, ...routes].forEach(route => {
        switch (window.location.pathname) {
          case `${route.link}`:
            if (props.value !== route.activeIndex) {
              setValue(route.activeIndex);
              if (
                route.selectedIndex &&
                route.selectedIndex !== props.selectedIndex
              ) {
                props.setSelectedIndex(route.selectedIndex);
              }
            }
            break;
          case "/estimate":
            props.setValue(5);
            break;
          default:
            break;
        }
      });
    }, [props.value, menuOptions, props.selectedIndex, routes, props]);


const tabs = (
  <React.Fragment>
<Typography variant = "h3" color="secondary">

<Tabs value={value} onChange={handleChange} className={classes.tabContainer}>

<Tab className={classes.tab} component={Link} to="/" label="Home" />
<Tab className={classes.tab} component={Link} to="/shop" label="Shop" />


{!isAuthenticated() && (
    <>
<Tab className={classes.tab} component={Link} to="/signin" label="SignIn" />
<Tab className={classes.tab} component={Link} to="/signup" label="SignUp" />
</>
)}

{isAuthenticated() && (

  <Tab className={classes.tab} component={Link} onClick={() => signout(() => { ("/");})} label="SignOut" />
)}



{isAuthenticated() && isAuthenticated().user.role === 1 && (
            
                    <Link
                        className="header-nav-item"
                        to="/admin/dashboard"
                    >
                        <DashboardIcon style={{marginLeft:"auto"}}/>
                    </Link>
              
            )}

{isAuthenticated() && isAuthenticated().user.role === 0 && (
<Link className="header-nav-item" to="/user/dashboard" label="Dash" />
)}

              <Link
                    className="header-nav-item"
                    to="/cart"
                >
                <ShoppingCartIcon />
                    {" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>


</Tabs>

</Typography>
  </React.Fragment>

);

const drawer = (
  <React.Fragment>
        <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
           paper: classes.drawer,
           }}
        >
        <div className={classes.toolbarMargin} />
          <List disablePadding>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(0)}}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography> Home </ListItemText>
            </ListItem>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}}
            divider
            button
            component={Link}
            to="/shop"
            selected={value === 1}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography>
              Shop
            </ListItemText>
            </ListItem>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(2)}}
            divider
            button
            component={Link}
            to="/signin"
            selected={value === 2}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography>
              SignIn
            </ListItemText>
            </ListItem>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(3)}}
            divider
            button
            component={Link}
            to="/signin"
            selected={value === 3}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography>
              SignUp
            </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
          <IconButton className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)} >
            <MenuIcon className={classes.drawerIcon}/>
          </IconButton>

  </React.Fragment>

)

    return (
      <React.Fragment>
      <ElevationScroll>

      <AppBar position="fixed" color="white" className={classes.appBar}>

        <ToolBar disableGutters>
        <Button component={Link} to="/" onClick={() => setValue(0)}>
        <img alt="company logo" className={classes.logo} src={M} />
       </Button>


       {matches ? drawer : tabs}



      </ToolBar>
      </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      </React.Fragment>
    );
  }
