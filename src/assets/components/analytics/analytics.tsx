import Grid from "@mui/material/Grid";
import TotalSales from "./TotalSales";
import TotalExpenses from "./TotalExpenses";
import TotalUser from "./TotalUser";
import UserAge from "./UserAge";
import Refferals from "./Refferals";
import TopCountries from "./TopCountries";
import DailyRevenue from "./DailyRevenue";
import SalesOverview from "./SalesOverview";
import SalesByGender from "./SalesByGender";
import RecentOrder from "./RecentOrder";

const Analytics = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TotalSales />
        </Grid>
        <Grid item xs={4}>
          <TotalExpenses />
        </Grid>
        <Grid item xs={4}>
          <TotalUser />
        </Grid>
        <Grid item xs={8}>
          <UserAge />
        </Grid>
        <Grid item xs={4}>
          <Refferals />
        </Grid>
        <Grid item xs={4}>
          <TopCountries />
        </Grid>
        <Grid item xs={8}>
          <DailyRevenue />
        </Grid>
        <Grid item xs={9}>
          <SalesOverview />
        </Grid>
        <Grid item xs={3}>
          <SalesByGender />
        </Grid>
        <Grid item xs={12}>
          <RecentOrder />
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;
// https://github.com/vikas62081/material-table-YT/tree/crudoperation
