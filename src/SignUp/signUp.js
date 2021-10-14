import React from "react";
import { useHistory } from "react-router-dom";
import {
	Grid,
	TextField,
	Button,
	InputAdornment,
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

function SignUp(props) {
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	// const [userNameReg, setUsernameReg] = React.useState("");

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};
	const history = useHistory();
	async function createEmployee() {
		const axios = require("axios");

		let passedData = {
			firstname: "Patrick",
			lastname: "Skamrahl",
			// last_name: "Skamrahl",
			mail: "ps@marmalade.group",
			description: "2test",
		};
		await axios
			.post("http://localhost:8080/api/skillmap/", passedData)
			.then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		history.push("/skillmap");
	}
	return (
		<div>
			<Grid container style={{ minHeight: "100vh" }}>
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
							label="Choose Username"
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
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
							type={values.showPassword ? "text" : "password"}
							label="Choose Password"
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
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
							type={values.showPassword ? "text" : "password"}
							label="Repeat Password"
							margin="normal"
						/>
						<ContainedColorButton
							style={{ marginBottom: "50px", marginTop: "20px" }}
							variant="contained"
							onClick={() => createEmployee()}
						>
							Sign Up
						</ContainedColorButton>
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img
						src="https://placeimg.com/1000/1000/animals/grayscale"
						alt="skillMapImage"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default SignUp;
