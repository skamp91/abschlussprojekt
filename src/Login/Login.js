import React from "react";
import {
   Grid,
   TextField,
   Button,
   InputAdornment,
   FormControl,
   InputLabel,
   FilledInput,
   IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import {
   AccountCircle,
   LockRounded,
   Visibility,
   VisibilityOff,
} from "@mui/icons-material";

const CssTextField = styled(TextField)({
   "& label.Mui-focused": {
      color: "#0d7700",
   },
   "& .MuiInput-underline:after": {
      borderBottomColor: "#0d5500",
   },
   "& .MuiOutlinedInput-root": {
      "& fieldset": {
         borderColor: "grayscale",
      },
      "&:hover fieldset": {
         borderColor: "black",
      },
      "&.Mui-focused fieldset": {
         borderColor: "#0d5500",
      },
   },
});

const ContainedColorButton = styled(Button)(() => ({
   backgroundColor: lightGreen[900],
   color: "white",
   "&:hover": {
      backgroundColor: lightGreen[800],
   },
}));
const OutlinedColorButton = styled(Button)(() => ({
   backgroundColor: "white",
   borderColor: lightGreen[900],
   color: "black",
   "&:hover": {
      borderColor: lightGreen[400],
      backgroundColor: lightGreen[200],
   },
}));
function Login(props) {
   const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
   });

   const [userNameReg, setUsernameReg] = React.useState("");

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      });
   };
   return (
      <div>
         <Grid container style={{ minHeight: "100vh" }}>
            <Grid item xs={12} sm={6}>
               <img
                  src="https://placeimg.com/1000/1000/animals/grayscale"
                  alt="skillMapImage"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
               />
            </Grid>
            <Grid
               container
               item
               xs={12}
               sm={6}
               alignItems="center"
               justifyContent="center"
               direction="column"
               style={{ padding: 10, backgroundColor: "white" }}
            >
               <div />
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     maxWidth: 400,
                     minWidth: 300,
                  }}
               >
                  <Grid container justifyContent="center">
                     <img
                        src="https://placeimg.com/1000/1000/nature/sepia"
                        alt="logo"
                        style={{
                           borderRadius: "50%",
                           width: 200,
                           objectFit: "cover",
                        }}
                     />
                  </Grid>
                  <CssTextField
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <AccountCircle />
                           </InputAdornment>
                        ),
                     }}
                     label="Username"
                     margin="normal"
                  />
                  <CssTextField
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <LockRounded />
                           </InputAdornment>
                        ),
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 edge="end"
                              >
                                 {values.showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     type={values.showPassword ? "text" : "password"}
                     label="Password"
                     margin="normal"
                  />

                  <div style={{ height: 20 }}></div>
                  <ContainedColorButton
                     style={{ marginBottom: "50px" }}
                     variant="contained"
                  >
                     Login
                  </ContainedColorButton>
                  <p>Not Registered?? Then Sign In</p>
                  <OutlinedColorButton
                     variant="outlined"
                     style={{ width: "30%", alignSelf: "center" }}
                  >
                     Sign In
                  </OutlinedColorButton>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}

export default Login;
