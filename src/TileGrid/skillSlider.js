import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
	{
		value: 0,
		label: "0%",
	},

	{
		value: 100,
		label: "100%",
	},
];

function valuetext(value) {
	return `${value}%`;
}

export default function SkillSlider() {
	return (
		<Box sx={{ width: 260, marginLeft: "20px" }}>
			<Slider
				size="medium"
				aria-label="Always visible"
				defaultValue={0}
				getAriaValueText={valuetext}
				step={10}
				marks={marks}
				valueLabelDisplay="on"
			/>
		</Box>
	);
}
