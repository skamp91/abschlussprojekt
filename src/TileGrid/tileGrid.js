import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SkillSlider from "./skillSlider";
import { Button } from "@mui/material";

export default function TileGrid(props) {
	const { topics } = props;
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				flexWrap: "wrap",
				margin: "20px",

				"& > :not(style)": {
					m: 1,
					width: 300,
					height: 200,
				},
			}}
		>
			{topics.map((topic, index) => (
				<Paper
					sx={{
						bgcolor: "#d9ffcc",
						fontStyle: "italic",
						fontSize: 24,
						marginTop: 20,
					}}
					key={index}
					elevation={3}
				>
					<p>{topic}</p>
					<SkillSlider />
					<Button />
				</Paper>
			))}
		</Box>
	);
}
