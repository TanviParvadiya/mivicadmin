import * as serviceWorker from "./serviceWorker";
import Box from "../product-list/box";
import MyErrorBoundary from "../../MyErrorBoundaryExample";


const Productslist = () => {
  return (
    <>
      <MyErrorBoundary>
        <Box />
      </MyErrorBoundary>
      {/* <Grid container spacing={3}>
        <Grid item xs={8}>
          <AppP />
        </Grid>
        <Grid item xs={8}>
          <StudentForm />
          <Students />
        </Grid>
        <Grid item xs={4}>
          <StudentForm />
        </Grid>
        <Grid item xs={12}> */}
      {/* <RecentOrder />f frc */}
      {/* </Grid>
      </Grid> */}
    </>
  );
};
serviceWorker.unregister();

export default Productslist;
