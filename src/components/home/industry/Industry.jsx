import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../common/Heading";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import picture1 from "./industryimages/closeup-green-sea-turtle-swimming-underwater-lights (1).jpg";
import picture2 from "./industryimages/oil-rigs-sunset-created-with-generative-ai-technology (1).jpg";
import picture3 from "./industryimages/power-plant-construction (1).jpg";
import picture4 from "./industryimages/sunny-landscape-with-windmills (1).jpg";

function Industry() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  return (
    <>
     {/*  <Heading
        title="Come Do Business With Us"
        subtitle="Sustainability is integral to our overall strategy as we seek to deliver long-term financial value while minimizing our environmental footprint and having a positive impact on society. This is expressed in our Guiding Principles for Sustainability."
      />

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum
              autem sapiente laudantium numquam, blanditiis cumque esse
              reprehenderit id corrupti deserunt eius qui harum velit doloribus!
              Dolor obcaecati accusantium ducimus?
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              voluptatum, fugit dolores aliquam quam facilis cum inventore vero
              doloremque? Ipsam suscipit optio dolore alias autem corporis saepe
              minima odit nihil.
            </Item>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}

export default Industry;
