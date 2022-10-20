import ProductGrid from "../../../assets/components/ecommerce/product-grid/ProductGrid";
import Productdetails from "../../../assets/components/ecommerce/product-details/productdetails";
import Editprofile from "../../../assets/components/pages/edit-profile/editprofile";
import Checkout from "../../../assets/components/ecommerce/checkout/checkout";
import Faq from "../../../assets/components/pages/faq/faq";
import Shoppingcart from "../../../assets/components/ecommerce/shopping-cart/shoppingcart";
import Defultdashboard from "../../../assets/components/defultdashboard/Defultdashboard";
import Analytics from "../../../assets/components/analytics/analytics";
import { Routes, Route } from "react-router-dom";
import Calender from "../../../assets/components/pages/calender/Calender";
import PageNotFound from "../../../assets/components/pages/PageNotFound/PageNotFound";
import Todogrid from "../../../assets/components/pages/todo/todogrid";
import Gallery from "../../../assets/components/pages/gallery/gallery";
import Singleblog from "../../../assets/components/pages/singleblog/singleblog";
import Pricing from "../../../assets/components/pages/pricing/pricing";
import Blog from "../../../assets/components/pages/blog/blog";
import Radialbar from "../../../assets/components/charts/radialbar/radialbar";
import Line from "../../../assets/components/charts/line/line";
import Candlestick from "../../../assets/components/charts/candlestick/candlestick";
import Accordion from "../../../assets/components/element/accordion/accordion";
import Alert from "../../../assets/components/element/alert/alert";
import Badges from "../../../assets/components/element/badges/badges";
import Breadcrumbs from "../../../assets/components/element/breadcrumbs/breadcrumbs";
import Card from "../../../assets/components/element/card/card";
import Button from "../../../assets/components/element/button/button";
import Rating from "../../../assets/components/element/rating/rating";
import Dialog from "../../../assets/components/element/dialog/dialog";
import AppBox from "../../../assets/components/ecommerce/product-list/box";

const RoutesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Defultdashboard />} />
        <Route path="/dashboard">
          <Route index={true} element={<Defultdashboard />} />
          <Route path="/dashboard/deafult" element={<Defultdashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
        </Route>
        <Route path="/ecommerce/product-list" element={<AppBox />} />
        <Route path="/ecommerce/product-grid" element={<ProductGrid />} />
        <Route path="/ecommerce/product-details" element={<Productdetails />} />
        <Route path="/ecommerce/checkout" element={<Checkout />} />
        <Route path="/edit-profile" element={<Editprofile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ecommerce/shoppingcart" element={<Shoppingcart />} />
        <Route path="/Calendar" element={<Calender />} />
        <Route path="/to-do-list" element={<Todogrid />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/single-blog" element={<Singleblog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/charts/radialbar" element={<Radialbar />} />
        <Route path="/charts/line" element={<Line />} />
        <Route path="/charts/candlestick" element={<Candlestick />} />
        <Route path="/elements/accordion" element={<Accordion />} />
        <Route path="/elements/alert" element={<Alert />} />
        <Route path="/elements/badges" element={<Badges />} />
        <Route path="/elements/breadcrumb" element={<Breadcrumbs />} />
        <Route path="/elements/card" element={<Card />} />
        <Route path="/elements/button" element={<Button />} />
        <Route path="/elements/rating" element={<Rating />} />
        <Route path="/elements/dialog" element={<Dialog />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesDashboard;
