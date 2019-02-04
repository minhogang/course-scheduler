class Course {
	constructor(kwargs) {
		this.term = kwargs.term;
		this.course_code = kwargs.course_code;
		this.title = kwargs.title;
		this.credits = kwargs.credits;
		this.academic_level = kwargs.academic_level;
	}
}

class Section {
	constructor(kwargs) {
		this.section_number = kwargs.section_number;
		this.description = kwargs.description;
		this.faculty = kwargs.faculty;
		this.phone = kwargs.phone;
		this.extension = kwargs.extension;
		this.email = kwargs.email;
		this.instructional_method = kwargs.instructional_method;
		this.requisite_courses = kwargs.requisite_courses;
		this.location = kwargs.location;
		this.meeting_info = kwargs.meeting_info;
		this.available = kwargs.available;
		this.max_capacity = kwargs.max_capacity;
		this.status = kwargs.status;
	}
}

export const findOptimalSchedule = (term, courses, config) => {
    
}
