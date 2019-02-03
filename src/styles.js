import { emphasize } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: 250,
        margin: "50px 50px",
	},
	input: {
		display: "flex",
		padding: 0
	},
	valueContainer: {
		display: "flex",
		flexWrap: "wrap",
		flex: 1,
		alignItems: "center",
		overflow: "hidden"
	},
	chip: {
		margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
	},
	chipFocused: {
		backgroundColor: emphasize(
			theme.palette.type === "light"
				? theme.palette.grey[300]
				: theme.palette.grey[700],
			0.08
		)
	},
	noOptionsMessage: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	singleValue: {
		fontSize: 16
	},
	placeholder: {
		position: "absolute",
		left: 2,
		fontSize: 16
	},
	paper: {
		position: "absolute",
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
	},
	divider: {
		marginTop: 50,
	},
	choiceRoot: {
		flexGrow: 1,
	},
	choiceBackgroundPaper: {
		padding: theme.spacing.unit * 2,
		margin: "auto", 
		maxWidth: 600,
		width: 500,
		maxHeight: 200,
		
	},
	courseChip: {
		margin: theme.spacing.unit,
	},
	innerGrid: {
		maxHeight: 200
	},
	generateButton: {
		margin: 20,
		float: "right",
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	}
});

export default styles;