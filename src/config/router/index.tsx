import AcUnitIcon from "@mui/icons-material/AcUnit";
import Defultdashboard from "../../assets/components/defultdashboard/Defultdashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SegmentIcon from "@mui/icons-material/Segment";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GamepadOutlinedIcon from "@mui/icons-material/GamepadOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/Inbox";
export const router = [
  {
    icon: <AcUnitIcon />,
    label: "dashboard",
    path: "/",
    title: "adashboard",
    template: "",
    id: "dashbord",
    component: Defultdashboard,
    child: [
      {
        id: 1,
        icon: <DashboardOutlinedIcon />,
        label: "Default",
        path: "/dashboard/deafult",
      },
      {
        id: 2,
        icon: <AddchartOutlinedIcon />,
        label: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        id: 3,
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
    id: "ecc",
    component: Defultdashboard,
    child: [
      {
        id: 4,
        icon: <FormatListBulletedIcon />,
        label: "Products List",
        path: "/ecommerce/product-list",
      },
      {
        id: 5,
        icon: <GridOnOutlinedIcon />,
        label: "Products Grid",
        path: "/ecommerce/product-grid",
      },
      {
        id: 6,
        icon: <BallotOutlinedIcon />,
        label: "Products Details",
        path: "/ecommerce/product-details",
      },
      {
        id: 7,
        icon: <ShoppingCartCheckoutOutlinedIcon />,
        label: "Shopping Cart",
        path: "/ecommerce/shoppingcart",
      },
      {
        id: 8,
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
    id: "pag",
    component: Defultdashboard,
    child: [
      {
        id: 9,
        icon: <InputOutlinedIcon />,
        label: "Login",
        path: "/auth/login",
      },
      {
        id: 10,
        icon: <HowToRegOutlinedIcon />,
        label: "Registration",
        path: "/auth/registration",
      },
      {
        id: 11,
        icon: <LockResetOutlinedIcon />,
        label: "Forgot Password",
        path: "/auth/forgot-password",
      },
      {
        id: 12,
        icon: <PortraitIcon />,
        label: "Edit Profile",
        path: "/edit-profile",
      },
      {
        id: 13,
        icon: <QuizOutlinedIcon />,
        label: "Faq",
        path: "/faq",
      },
      {
        id: 14,
        icon: <ErrorOutlineOutlinedIcon />,
        label: "Error",
        path: "/404",
      },
      {
        id: 15,
        icon: <CandlestickChartOutlinedIcon />,
        label: "Calendar",
        path: "/Calendar",
      },
      {
        id: 16,
        icon: <PlaylistAddCheckOutlinedIcon />,
        label: "To Do List",
        path: "/to-do-list",
      },
      {
        id: 17,
        icon: <LocalOfferOutlinedIcon />,
        label: " Pricing",
        path: "/pricing",
      },
      {
        id: 18,
        icon: <CollectionsOutlinedIcon />,
        label: "Gallery",
        path: "/gallery",
      },
      {
        id: 19,
        icon: <RssFeedOutlinedIcon />,
        label: "Single Blog",
        path: "/single-blog",
      },
      {
        id: 20,
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
    id: "cht",
    component: Defultdashboard,
    child: [
      {
        id: 21,
        icon: <DataSaverOffIcon />,
        label: "RadialBar Charts",
        path: "/charts/radialbar",
      },
      {
        id: 22,
        icon: <ShowChartIcon />,
        label: "line charts",
        path: "/charts/line",
      },
      {
        id: 23,
        icon: <CandlestickChartOutlinedIcon />,
        label: "Candlestick Charts",
        path: "/charts/candlestick",
      },
    ],
  },
  {
    icon: <AcUnitIcon />,
    label: "element",
    path: "/",
    title: "adashboard",
    template: "",
    id: "dashb",
    component: Defultdashboard,
    child: [
      {
        id: 33,
        icon: <SegmentIcon />,
        label: "Accordion",
        path: "/elements/accordion",
      },
      {
        id: 34,
        icon: <CampaignOutlinedIcon />,
        label: "Alert",
        path: "/elements/alert",
      },
      {
        id: 35,
        icon: <CollectionsBookmarkOutlinedIcon />,
        label: "Badges",
        path: "/elements/badges",
      },
      {
        id: 36,
        icon: <HomeOutlinedIcon />,
        label: "Breadcrumb",
        path: "/elements/breadcrumb",
      },
      {
        id: 37,
        icon: <GamepadOutlinedIcon />,
        label: "Button",
        path: "/elements/button",
      },
      {
        id: 38,
        icon: <ViewDayOutlinedIcon />,
        label: "Card",
        path: "/elements/card",
      },
      {
        id: 39,
        icon: <StarBorderIcon />,
        label: "Rating",
        path: "/elements/rating",
      },
      {
        id: 40,
        icon: <InboxIcon />,
        label: "Dialog",
        path: "/elements/dialog",
      },
    ],
  },
];
