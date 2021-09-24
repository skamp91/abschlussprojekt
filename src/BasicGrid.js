import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item>
               <Item>HTML</Item>
            </Grid>
            <Grid item>
               <Item>CSS</Item>
            </Grid>
            <Grid item>
               <Item>Javascript</Item>
            </Grid>
            <Grid item>
               <Item>Versionierung</Item>
            </Grid>
         </Grid>
      </Box>
   );
}
