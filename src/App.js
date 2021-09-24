import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import "./App.css";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
   root: {
      color: "beige",
   },
});

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`full-width-tabpanel-${index}`}
         aria-labelledby={`full-width-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
   };
}

export default function App() {
   const [value, setValue] = React.useState();
   const [display, setDisplay] = React.useState(["none", "none", "none"]);

   const innerBox = () => {
      const rendered = (
         <Box
            sx={{
               display: { display },
               justifyContent: "center",
               flexWrap: "wrap",
               margin: 5,
               "& > :not(style)": {
                  width: 300,
                  height: 100,
                  margin: 1,
               },
            }}
         >
            <Paper elevation={1}>HTML</Paper>
            <Paper elevation={2}>CSS</Paper>
            <Paper elevation={3}>Javacript</Paper>
         </Box>
      );

      return rendered;
   };
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   function handleToggle(e) {
      console.log(display[e - 1]);
      if (display[e] == "none") {
         setDisplay(["flex", "none", "none"]);
      } else {
         setDisplay(["none", "none", "none"]);
      }

      return 0;
   }

   const classes = useStyles();
   return (
      <Box
         sx={{
            bgcolor: "grey",
         }}
      >
         <AppBar>
            <Tabs
               centered
               value={value}
               onChange={handleChange}
               variant="fullWidth"
               aria-label="full width tabs"
            >
               <Tab label="Frontend" {...a11yProps(0)} />
               <Tab label="Backend" {...a11yProps(1)} />
               <Tab label="DevOps" {...a11yProps(2)} />
               {/* <Tab label="Item Four" {...a11yProps(3)} />
               <Tab label="Item Five" {...a11yProps(4)} />
               <Tab label="Item Six" {...a11yProps(5)} /> */}
            </Tabs>
         </AppBar>

         <TabPanel value={value} index={0}>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  margin: 5,
                  "& > :not(style)": {
                     width: 300,
                     height: 100,
                     margin: 1,
                  },
               }}
            >
               <Paper onClick={() => handleToggle(1)} elevation={1}>
                  <span>HTML</span>
                  {innerBox(1)}
               </Paper>
               <Paper elevation={2}>CSS {innerBox(2)}</Paper>
               <Paper elevation={3}>Javacript{innerBox(3)}</Paper>
            </Box>
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
      </Box>
   );
}
