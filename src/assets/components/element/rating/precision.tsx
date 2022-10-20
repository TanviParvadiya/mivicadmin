import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import PrecisionCC from "./precisionCC";

export default function HalfRating() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Rating precision</h6>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
      <PrecisionCC/>
    </div>
  );
}
