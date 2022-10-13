import ProductGrid from "../../../assets/components/ecommerce/product-grid/ProductGrid";
import Productdetails from "../../../assets/components/ecommerce/product-details/productdetails";
import Editprofile from "../../../assets/components/pages/edit-profile/editprofile";
import Productslist from "../../../assets/components/ecommerce/products-list/Productslist";
import Students from "../../../assets/components/ecommerce/products-list/Students";
import StudentForm from "../../../assets/components/ecommerce/products-list/StudentForm";
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
        <Route path="/ecommerce/product-list" element={<Productslist />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/create" element={<StudentForm />} />
        <Route path="/students/edit/:studentId" element={<StudentForm />} />
        <Route path="/ecommerce/product-grid" element={<ProductGrid />} />
        <Route path="/ecommerce/product-details" element={<Productdetails />} />
        <Route path="/ecommerce/checkout" element={<Checkout />} />
        <Route path="/edit-profile" element={<Editprofile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ecommerce/shoppingcart" element={<Shoppingcart />} />
        <Route path="/Calendar" element={<Calender />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/to-do-list" element={<Todogrid />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/single-blog" element={<Singleblog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/charts/radialbar" element={<Radialbar />} />
        <Route path="/charts/line" element={<Line />} />
        {/*
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Register />} /> */}
      </Routes>
    </>
  );
};

export default RoutesDashboard;
