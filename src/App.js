import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import styles from "./styles";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BASE_API_URL, TERM_MAPPINGS } from './constants';
import { Control, Menu, MultiValue, NoOptionsMessage, Option,
		SingleValue, Placeholder, ValueContainer } from './components';
const fetch = require('node-fetch');

const COURSE_REGEX = new RegExp(BASE_API_URL + "terms/.*\\/courses\\/(.*)\\/\\?format=json")


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

class Main extends React.Component {
	state = {
		single: null,
		multi: null,
		hasSelectedTerm: false,
		termDropdownOptions: [],
		courseDropdownOptions: [],
	};

	componentDidMount() {
		const terms = [];
		fetch(BASE_API_URL + "terms/")
			.then(res => res.json())
			.then(json => {for (let i = 0; i < json.length; i++) {
				terms.push({label: json[i]['term_code']})
			}})
			.then(() => terms.map(term => ({
				value: term.label,
				label: term.label
				})
			))
			.then(() => this.setState({termDropdownOptions: terms}))
			.then(console.log(terms))
			.catch(err => console.log(err))
	}
	handleChange = (name, event) => {
		this.setState({
			[name]: event
		});
	};

	resetCourses = (e) => {
		if (!this.state.hasSelectedTerm) {
			this.setState({hasSelectedTerm: true})
		}
		const options = [];
		this.setState({multi: null});
		fetch(BASE_API_URL + 'terms/' + e.label + '/?format=json')
			.then(res => res.json())
			.then(json => {for (let i = 0; i < json['courses_offered'].length; i++){
				options.push(json['courses_offered'][i].match(COURSE_REGEX)[1])
			}})
			.then(() => options.map(course => ({
				value: course,
				label: course
				})
			))
			.then((options) => this.setState({courseDropdownOptions: options}))
			.catch(err => console.log(err))
		
	}

	handleChipClick = (e) => {
		alert("You have clicked the chip");
	}

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
						textFieldProps={{
							label: "Term",
							InputLabelProps: {
								shrink: true
							}

						}}
						options={this.state.termDropdownOptions}
						components={components}
						value={this.state.single}
						onChange={(e) => {this.handleChange('single', e); this.resetCourses(e)}}
						placeholder="Select a Term"
						isClearable
					/>
					<div className={classes.divider} />
					<Select
						classes={classes}
						styles={selectStyles}
						textFieldProps={{
							label: "Courses",
							InputLabelProps: {
								shrink: true
							}
						}}
						options={this.state.courseDropdownOptions}
						components={components}
						value={this.state.multi}
						onChange={(e) => {this.handleChange('multi', e)}}
						placeholder="Select Courses"
						isMulti
						isDisabled={!this.state.hasSelectedTerm}
					/>
				</NoSsr>
				<Button variant="contained" color="primary" className={classes.generateButton}>
				Click Me!
				<CloudUploadIcon className={classes.rightIcon}>Generate</CloudUploadIcon>
				</Button>
				<br />
				<br />
				<Divider className={classes.divider} variant="middle"/>
				<br />
				<br />
				<div className={classes.choiceRoot}>
					<Grid container spacing={32}>
						<Paper className={classes.choiceBackgroundPaper}>
							<Typography variant="subtitle1">Spring 2019</Typography>
							<Grid container xs direction="column" spacing={8} wrap="wrap" className={classes.innerGrid}>
								<Grid item xs>
									<Chip 
									className={classes.courseChip}
									avatar={<Avatar>CS</Avatar>}
									onClick={this.handleChipClick}
									label="CS301"
									/>
								</Grid>
								<Grid item xs>
									<Chip className={classes.courseChip}label="Basic Chip" />
								</Grid>
								<Grid item xs>
									<Chip className={classes.courseChip}label="Basic Chip" />
								</Grid>
								<Grid item xs>
									<Chip className={classes.courseChip}label="Basic Chip" />
								</Grid>
								<Grid item xs>
									<Chip className={classes.courseChip}label="Basic Chip" />
								</Grid>
								<Grid item xs>
									<Chip className={classes.courseChip}label="Basic Chip" />
								</Grid>
							</Grid>							
						</Paper>
						<Grid item xs={4}>
							<Paper className={classes.choiceBackgroundPaper}>
							Test
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.choiceBackgroundPaper}>
							Git Gud
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.choiceBackgroundPaper}>
							asdf
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.choiceBackgroundPaper}>
							asdf
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
