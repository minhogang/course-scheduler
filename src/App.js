import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles";

class Course {
	constructor(term, course_code, title, credits, academic_level) {
		this.term = term;
		this.course_code = course_code;
		this.title = title;
		this.credits = credits;
		this.academic_level = academic_level;
	}
}

class Section {
	constructor(section_number, description, faculty, phone, extension, email, 
				instructional_method, requisite_courses, location, meeting_info,
				available, max_capacity, status) {
		this.section_number = section_number;
		this.description = description;
		this.faculty = faculty;
		this.phone = phone;
		this.extension = extension;
		this.email = email;
		this.instructional_method = instructional_method;
		this.requisite_courses = requisite_courses;
		this.location = location;
		this.meeting_info = meeting_info;
		this.available = available;
		this.max_capacity = max_capacity;
		this.status = status;
	}
}
const suggestions = [
	{ label: "Afghanistan" },
	{ label: "Aland Islands" },
	{ label: "Albania" },
	{ label: "Algeria" },
	{ label: "American Samoa" },
	{ label: "Andorra" }
].map(suggestion => ({
	value: suggestion.label,
	label: suggestion.label
}));


function NoOptionsMessage(props) {
	return (
		<Typography
			color="textSecondary"
			className={props.selectProps.classes.noOptionsMessage}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

function inputComponent({ inputRef, ...props }) {
	return <div ref={inputRef} {...props} />;
}

function Control(props) {
	return (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps
				}
			}}
			{...props.selectProps.textFieldProps}
		/>
	);
}

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{
				fontWeight: props.isSelected ? 500 : 400
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}

function Placeholder(props) {
	return (
		<Typography
			color="textSecondary"
			className={props.selectProps.classes.placeholder}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

function SingleValue(props) {
	return (
		<Typography
			className={props.selectProps.classes.singleValue}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

function ValueContainer(props) {
	return (
		<div className={props.selectProps.classes.valueContainer}>
			{props.children}
		</div>
	);
}

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={classNames(props.selectProps.classes.chip, {
				[props.selectProps.classes.chipFocused]: props.isFocused
			})}
			onDelete={props.removeProps.onClick}
			deleteIcon={<CancelIcon {...props.removeProps} />}
		/>
	);
}

function Menu(props) {
	return (
		<Paper
			square
			className={props.selectProps.classes.paper}
			{...props.innerProps}
		>
			{props.children}
		</Paper>
	);
}

const components = {
	Control,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	SingleValue,
	ValueContainer
};

class IntegrationReactSelect extends React.Component {
	state = {
		single: null,
		multi: null
	};

	handleChange = name => value => {
		this.setState({
			[name]: value
		});
	};

	render() {
		const { classes, theme } = this.props;

		const selectStyles = {
			input: base => ({
				...base,
				color: theme.palette.text.primary,
				"& input": {
					font: "inherit"
				}
			})
		};

		return (
			<div className={classes.root}>
				<NoSsr>
					<Select
						classes={classes}
						styles={selectStyles}
						options={suggestions}
						components={components}
						value={this.state.single}
						onChange={this.handleChange("single")}
						placeholder="Search a Term"
						isClearable
					/>
					<div className={classes.divider} />
					<Select
						classes={classes}
						styles={selectStyles}
						textFieldProps={{
							label: "Label",
							InputLabelProps: {
								shrink: true
							}
						}}
						options={suggestions}
						components={components}
						value={this.state.multi}
						onChange={this.handleChange("multi")}
						placeholder="Select Courses"
						isMulti
					/>
				</NoSsr>
			</div>
		);
	}
}

IntegrationReactSelect.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);
