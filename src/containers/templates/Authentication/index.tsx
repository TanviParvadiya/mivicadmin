import PageNotFound from "../../../assets/components/pages/PageNotFound/PageNotFound";
import Login from "../../../assets/components/pages/login/login";
import { Routes, Route } from "react-router-dom";

const RoutesAuth = () => {
 
  return (
    <>
    <div className="demo">
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </>
  );
};

export default RoutesAuth;
