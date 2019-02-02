const BASE_API_URL = "http://127.0.0.1:8000";

const COURSE_REGEX = new RegExp(BASE_API_URL + "/terms/.*\\/courses\\/(.*)\\/\\?format=json")

const str = "http://127.0.0.1:8000/terms/19XA/courses/PA-403/?format=json";

console.log(str.match(COURSE_REGEX)[1])
