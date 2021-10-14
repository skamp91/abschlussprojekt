import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TileGrid from "../TileGrid/tileGrid";

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
	// value: PropTypes.number.isRequired,
};

function SubTabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}
SubTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	// value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [subValue, setSubValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChange2 = (event, newValue) => {
		setSubValue(newValue);
	};

	return (
		<>
			<h1>SkillMapCheck</h1>
			<Box sx={{ width: "98%", margin: "1%" }}>
				<AppBar position="static" sx={{ height: "60px" }}>
					<Tabs
						className="main-appBar"
						TabIndicatorProps={{
							style: {
								background: "#d9ffcc",
								height: "100%",
								opacity: 0.2,
							},
						}}
						sx={{
							bgcolor: "#004f11",
							height: "100%",
						}}
						value={value}
						onChange={handleChange}
						textColor="inherit"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab
							sx={{
								height: "100%",
								borderRight: "1px solid rgba(255,255,255,0.3)",
							}}
							label="Frontend"
							{...a11yProps(0)}
						/>
						<Tab
							sx={{
								borderRight: "1px solid rgba(255,255,255,0.3)",
							}}
							label="Backend"
							{...a11yProps(1)}
						/>
						<Tab
							sx={{
								borderRight: "1px solid rgba(255,255,255,0.3)",
							}}
							label="DevOps"
							{...a11yProps(2)}
						/>
					</Tabs>
				</AppBar>

				<SubTabPanel value={value} index={0}>
					<Box centered sx={{ bgcolor: "none" }}>
						<AppBar position="static" sx={{ height: "60px" }}>
							<Tabs
								sx={{ bgcolor: "#004f11", height: "100%" }}
								value={subValue}
								TabIndicatorProps={{
									style: {
										background: "#d9ffcc",
										height: "100%",
										opacity: 0.3,
									},
								}}
								onChange={handleChange2}
								indicatorColor="secondary"
								textColor="inherit"
								variant="fullWidth"
								aria-label="full width tabs example"
							>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="HTML"
									{...a11yProps(0)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="CSS"
									{...a11yProps(1)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="Javascript"
									{...a11yProps(2)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="Versioning"
									{...a11yProps(3)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="Template Engines"
									{...a11yProps(4)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="Tooling"
									{...a11yProps(5)}
								/>
								<Tab
									sx={{
										borderRight:
											"1px solid rgba(255,255,255,0.3)",
									}}
									label="Test-Software"
									{...a11yProps(6)}
								/>
							</Tabs>
						</AppBar>
						<TabPanel value={subValue} index={0}>
							<TileGrid
								topics={[
									"Semantic HTML",
									"Accessibility",
									"SEO",
									"Formvalidations",
								]}
							/>
						</TabPanel>
						<TabPanel value={subValue} index={1}>
							two
						</TabPanel>
						<TabPanel value={subValue} index={2}>
							three
						</TabPanel>
					</Box>
				</SubTabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</Box>
		</>
	);
}
