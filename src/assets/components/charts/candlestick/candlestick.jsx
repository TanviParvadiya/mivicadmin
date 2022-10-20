import Grid from "@mui/material/Grid";
import Basic from "./basic";
import Boxplot from "./boxplot";
import HorizontalboxPlot from "./horizontalboxPlot";

const Candlestick = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Basic/>
        </Grid>
        <Grid item xs={6}>
          <Boxplot/>
        </Grid>
        <Grid item xs={6}>
          <HorizontalboxPlot/>
        </Grid>
       
      </Grid>
    </>
  );
};

export default Candlestick;
