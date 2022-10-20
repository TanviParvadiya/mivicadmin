import Grid from "@mui/material/Grid";
import Gradient from "./gradient";
import Stepline from "./stepline";
import Basic from "./basic";
import Datalabel from "./datalabel";

const Line = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Gradient />
        </Grid>
        <Grid item xs={6}>
          <Stepline />
        </Grid>
        <Grid item xs={6}>
          <Basic />
        </Grid>
        <Grid item xs={6}>
          <Datalabel />
        </Grid>
      </Grid>
    </>
  );
};

export default Line;
