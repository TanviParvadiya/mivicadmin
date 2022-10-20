import Grid from "@mui/material/Grid";
import Chartax from "./todayinfo";
import Secfchart from "./Revenue";
import SplineArea from "./EarningRevenue";
import RecentActivity from "./RecentActivity";
import Secschart from "./Visitor";
import Sectchart from "./ProductSold";
import Secfochart from "./Sale";
import Traffic from "./TrafficSection";
import RecentOrder from "./RecentOrder";
import Donut from "./SalesOverview";
import Defualtscreenbanner from "./Defualtscreenbanner";
import RecentOrderDemo from "./RecentOrderDemo";

const Defultdashboard = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Defualtscreenbanner />
        </Grid>
        <Grid item xs={3}>
          <Chartax />
        </Grid>
        <Grid item xs={3}>
          <Secfchart />
        </Grid>
        <Grid item xs={3}>
          <Secschart />
        </Grid>
        <Grid item xs={3}>
          <Sectchart />
        </Grid>
        <Grid item xs={3}>
          <Secfochart />
        </Grid>
        <Grid item xs={8}>
          <SplineArea />
        </Grid>
        <Grid item xs={4}>
          <RecentActivity />
        </Grid>
        <Grid item xs={12}>
          <Traffic />
        </Grid>
        <Grid item xs={8}>
          <RecentOrder />
        </Grid>
        <Grid item xs={4}>
          <Donut />
        </Grid>
      </Grid>
    </>
  );
};

export default Defultdashboard;
