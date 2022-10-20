import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

import TextField from "@mui/material/TextField";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import LogoutIcon from "@mui/icons-material/Logout";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import m1 from "../../../assets/Image/message/01.jpg";
import m2 from "../../../assets/Image/message/02.jpg";
import m3 from "../../../assets/Image/message/03.jpg";
import m4 from "../../../assets/Image/message/04.jpg";
import m5 from "../../../assets/Image/message/05.jpg";
import spain from "../../../assets/Image/fleg/spain.png";
import italy from "../../../assets/Image/fleg/italy.png";
import logo from "../../../assets/Image/logo.png";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { DashBoardRoute } from "../DashboardRoutes";
import { Dashboard } from "@material-ui/icons";
import RoutesDashboard from "./Routes";
// import { useState, useEffect } from "react";
// import Login from "../../../assets/components/pages/login/login";
// import { Register } from "../../../assets/components/pages/register/Register";
const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));
// -- route --

export default function DashboardTemplate() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  // useEffect(() => {

  // });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // -- full screnn --
  const handle = useFullScreenHandle();
  console.log(handle)
  // -- dropdown --
  // const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  // -- language
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open1 = Boolean(anchorEl);
  const id = open1 ? "simple-popover" : undefined;

  // -- notification
  const [anchorEl2, setAnchorEl2] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover2" : undefined;
  // -- chat
  const [anchorEl3, setAnchorEl3] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? "simple-popover3" : undefined;
  // -- profile
  const [anchorEl4, setAnchorEl4] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "simple-popover4" : undefined;

  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   // console.log(JSON.parse(localStorage.getItem("user")));
  //   const userData = localStorage.getItem("user");

  //   const user: any = userData !== null ? JSON.parse(userData || "") : false;

  //   if (
  //     window.location.pathname === "/registration" ||
  //     window.location.pathname === "/login"
  //   ) {
  //   }
  //   setLoggedIn(user === false ? false : true);
  // });
  return (
    <>
      <FullScreen handle={handle}>
        <div className="defult-headermd">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar>
                <div className="abc">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <div className="headersearch">
                    <Box>
                      <TextField fullWidth label="Search" id="search" />
                    </Box>
                  </div>
                  <div className="header-iconmd">
                    {/* <FullScreen handle={handle}> */}
                    <div className="verticalline">
                      <div onClick={!handle.active ?handle.enter:handle.exit}>
                        <FullscreenIcon />
                      </div>
                    </div>
                    {/* <ToggleColorMode /> */}
                    <div className="verticalline togglelangu ">
                      <div>
                        <Button
                          aria-describedby={id}
                          // variant="contained"
                          onClick={handleClick}
                        >
                          EN
                        </Button>
                        <Popover
                          id={id}
                          className="headerpopover"
                          open={open1}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div className="dflex">
                            <img src={spain} alt="message1" />
                            <p>Sp</p>
                          </div>
                          <div className="dflex">
                            <img src={italy} alt="message1" />
                            <p>It</p>
                          </div>
                        </Popover>
                      </div>
                    </div>
                    <div>{/* <a onclick="openFullscreen();> */}</div>
                    {/* -- notification -- */}
                    <div className="verticalline">
                      <div className="notificationicon">
                        <Button
                          aria-describedby={id2}
                          // variant="contained"
                          onClick={handleClick2}
                        >
                          <Badge badgeContent={5}>
                            <NotificationsActiveOutlinedIcon />
                          </Badge>
                        </Button>
                        <Popover
                          id={id2}
                          className="headerpopnoti"
                          open={open2}
                          anchorEl={anchorEl2}
                          onClose={handleClose2}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div className="dropdowninner">
                            <ul>
                              <li className="notifi-menu-content">
                                <div className="notifi-menu-contentnextdiv">
                                  <h3>Notifications</h3>
                                  <p className="markallread">Mark All Read</p>
                                </div>
                                <p className="totalnoti">
                                  You have 5 unread Notifications
                                </p>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <div className="notifyimg bg-pink">
                                    <DescriptionOutlinedIcon />
                                  </div>
                                  <div className="notificationlabel">
                                    <h5>New files available</h5>
                                    <p>10 hour ago</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <div className="notifyimg bg-purple">
                                    <DiamondOutlinedIcon />
                                  </div>
                                  <div className="notificationlabel">
                                    <h5>New files available</h5>
                                    <p>10 hour ago</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <div className="notifyimg bg-success">
                                    <ShoppingBasketOutlinedIcon />
                                  </div>
                                  <div className="notificationlabel">
                                    <h5>New files available</h5>
                                    <p>10 hour ago</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <div className="notifyimg bg-warning">
                                    <RateReviewOutlinedIcon />
                                  </div>
                                  <div className="notificationlabel">
                                    <h5>New files available</h5>
                                    <p>10 hour ago</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <div className="notifyimg bg-primary">
                                    <PersonOutlineOutlinedIcon />
                                  </div>
                                  <div className="notificationlabel">
                                    <h5>New files available</h5>
                                    <p>10 hour ago</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="viewallnotification">
                                <h5>view all</h5>
                              </li>
                            </ul>
                          </div>
                        </Popover>
                      </div>
                    </div>
                    {/* -- chat -- */}
                    <div className="verticalline">
                      <div className="chat">
                        <Button
                          aria-describedby={id3}
                          // variant="contained"
                          onClick={handleClick3}
                        >
                          <Badge badgeContent={4}>
                            <ChatOutlinedIcon />
                          </Badge>
                        </Button>
                        <Popover
                          id={id3}
                          className="headerpopchat"
                          open={open3}
                          anchorEl={anchorEl3}
                          onClose={handleClose3}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div className="dropdowninner chatdropdowninner">
                            <ul>
                              <li className="notifi-menu-content">
                                <div className="notifi-menu-contentnextdiv">
                                  <h3>Messages</h3>
                                  <p className="markallread">Mark All Read</p>
                                </div>
                                <p className="totalnoti">
                                  You have 4 unread Messages
                                </p>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <img src={m1} alt="message1" />
                                  <div className="notificationlabel">
                                    <h5>peter Park</h5>
                                    <p>we Will Help you..</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <img src={m5} alt="message1" />
                                  <div className="notificationlabel">
                                    <h5>Anna Denial</h5>
                                    <p>Here are Some Products.</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <img src={m3} alt="message1" />
                                  <div className="notificationlabel">
                                    <h5>New order Received</h5>
                                    <p>i am Not sure how can i do this.</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>
                              <li className="notificationbox">
                                <div className="notificationlbl">
                                  <img src={m4} alt="message1" />
                                  <div className="notificationlabel">
                                    <h5>Johan dave</h5>
                                    <p>Hello, i Need Help from your site..</p>
                                  </div>
                                </div>
                                <div className="arrowsvg">
                                  <ArrowForwardIosOutlinedIcon />
                                </div>
                              </li>

                              <li className="viewallnotification">
                                <h5>view all</h5>
                              </li>
                            </ul>
                          </div>
                        </Popover>
                      </div>
                    </div>
                    {/* -- profile -- */}
                    <div className="verticalline">
                      <div className="profile">
                        <Button
                          aria-describedby={id4}
                          // variant="contained"
                          onClick={handleClick4}
                        >
                          <div className="">
                            <img src={m2} alt="profile" />
                          </div>
                        </Button>
                        <Popover
                          id={id4}
                          className="headerpopprofile"
                          open={open4}
                          anchorEl={anchorEl4}
                          onClose={handleClose4}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <ul className="">
                            <div>
                              <div className="profilesec">
                                <img src={m2} alt="profile" />
                                <div>
                                  <h6 className="">Pretty lucky</h6>
                                  <p className="">Premium Member</p>
                                </div>
                              </div>
                            </div>
                            <li>
                              <Dashboard />
                              <a href="/#" className="">
                                Dashborad
                              </a>
                            </li>
                            <li>
                              <PortraitIcon />
                              <a href="/#" className="">
                                Edit Profile
                              </a>
                            </li>
                            <li>
                              <LogoutIcon />
                              <a href="/#">Log out</a>
                            </li>
                          </ul>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              {/* <DrawerHeader> */}
              <div className="dflex dflex-space-between padding-30 padding-b-0 adminpannal">
                <div className="themelogoimgdiv">
                  <img src={logo} alt="themelogo" />
                </div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              {/* </DrawerHeader> */}
              <Divider />
              <List>
                <DashBoardRoute />
              </List>
              <Divider />
            </Drawer>
            <Main open={open}>
              {/* <DrawerHeader /> */}
              <RoutesDashboard />
            </Main>
          </Box>
        </div>
      </FullScreen>
    </>
  );
}
