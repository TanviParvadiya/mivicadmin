
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Defultdashboard from "../../assets/components/defultdashboard/Defultdashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppsIcon from "@mui/icons-material/Apps";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import QuizIcon from "@mui/icons-material/Quiz";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

export const router = [
  {
    icon: <AcUnitIcon />,
    label: "dashboard",
    path: "/",
    title: "adashboard",
    template: "",
    id:'dash',
    component: Defultdashboard,
    child: [
      {
        id:1,
        icon: <DashboardIcon />,
        label: "Default",
        path: "/dashboard/deafult",
      },
      {
        id:2,
        icon: <AnalyticsIcon />,
        label: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        id:3,
        icon: <FlightLandIcon />,
        label: "Landing",
        path: "/dashboard/analytics",
      },
    ],
  },
  {
    icon: <AcUnitIcon />,
    label: "ECOMMERCE",
    path: "/",
    title: "ecommerce",
    template: "",
    id:'ecc',
    component: Defultdashboard,
    child: [
      {
        id:4,
        icon: <FormatListBulletedIcon />,
        label: "Products List",
        path: "/ecommerce/product-list",
      },
      {
        id:5,
        icon: <AppsIcon />,
        label: "Products Grid",
        path: "/ecommerce/product-grid",
      },
      {
        id:6,
        icon: <ViewSidebarIcon />,
        label: "Products Details",
        path: "/ecommerce/product-details",
      },
      {
        id:7,
        icon: <ShoppingCartCheckoutOutlinedIcon />,
        label: "Shopping Cart",
        path: "/ecommerce/shoppingcart",
      },
      {
        id:8,
        icon: <LibraryAddCheckOutlinedIcon />,
        label: "Checkout",
        path: "/ecommerce/checkout",
      },
    ],
  },
  {
    icon: <AcUnitIcon />,
    label: "pages",
    path: "/",
    title: "adashboard",
    template: "",
    id:'dashb',
    component: Defultdashboard,
    child: [
      {
        id:9,
        icon: <InputOutlinedIcon />,
        label: "Login",
        path: "/auth/login",
      },
      {
        id:10,
        icon: <HowToRegOutlinedIcon />,
        label: "Registration",
        path: "/auth/registration",
      },
      {
        id:11,
        icon: <LockResetOutlinedIcon />,
        label: "Forgot Password",
        path: "/auth/forgot-password",
      },
      {
        id:12,
        icon: <PortraitIcon />,
        label: "Edit Profile",
        path: "/edit-profile",
      },
      {
        id:13,
        icon: <QuizIcon />,
        label: "Faq",
        path: "/faq",
      },
      {
        id:14,
        icon: <ErrorOutlineOutlinedIcon />,
        label: "Error",
        path: "*",
      },
      {
        id:15,
        icon: <CalendarMonthOutlinedIcon />,
        label: "Calendar",
        path: "/Calendar",
      },
      {
        id:16,
        icon: <PlaylistAddCheckOutlinedIcon />,
        label: "To Do List",
        path: "/to-do-list",
      },
      {
        id:17,
        icon: <LocalOfferOutlinedIcon />,
        label: " Pricing",
        path: "/pricing",
      },
      {
        id:18,
        icon: <CollectionsOutlinedIcon />,
        label: "Gallery",
        path: "/gallery",
      },
      {
        id:19,
        icon: <RssFeedOutlinedIcon />,
        label: "Single Blog",
        path: "/single-blog",
      },
      {
        id:20,
        icon: <BookOutlinedIcon />,
        label: "Blogs",
        path: "/blogs",
      },
    ],
  },
  {
    icon: <AcUnitIcon />,
    label: "charts",
    path: "/",
    title: "adashboard",
    template: "",
    id:'dashb',
    component: Defultdashboard,
    child: [
      {
        id:21,
        icon: <DataSaverOffIcon />,
        label: "RadialBar Charts",
        path: "/charts/radialbar",
      },
      {
        id:22,
        icon: <ShowChartIcon />,
        label: "line charts",
        path: "/charts/line",
      },
      {
        id:23,
        icon: <CandlestickChartIcon />,
        label: "Candlestick Charts",
        path: "/charts/candlestick",
      },
      {
        id:24,
        icon: <PortraitIcon />,
        label: "Edit Profile",
        path: "/edit-profile",
      },
      {
        id:25,
        icon: <QuizIcon />,
        label: "Faq",
        path: "/faq",
      },
      {
        id:26,
        icon: <ErrorOutlineOutlinedIcon />,
        label: "Error",
        path: "*",
      },
      {
        id:27,
        icon: <CalendarMonthOutlinedIcon />,
        label: "Calendar",
        path: "/Calendar",
      },
      {
        id:28,
        icon: <PlaylistAddCheckOutlinedIcon />,
        label: "To Do List",
        path: "/to-do-list",
      },
      {
        id:29,
        icon: <LocalOfferOutlinedIcon />,
        label: "Pricing",
        path: "/pricing",
      },
      {
        id:30,
        icon: <CollectionsOutlinedIcon />,
        label: "Gallery",
        path: "/gallery",
      },
      {
        id:31,
        icon: <RssFeedOutlinedIcon />,
        label: "Single Blog",
        path: "/single-blog",
      },
      {
        id:32,
        icon: <BookOutlinedIcon />,
        label: "Blogs",
        path: "/blogs",
      },
    ],
  },
];
