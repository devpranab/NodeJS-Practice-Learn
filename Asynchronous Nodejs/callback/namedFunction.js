//use named function for callback hell

console.log("Line 1");

getStudents(1, showStudent);

//use named function
function showMarks(marks){
    console.log(marks);
}
function showCourses(course){
    console.log(course);
    getCoursesPrice(course.course, showMarks);
}
function showStudent(student){
    console.log(student);
    getCourses(student, showCourses);
}


console.log("Line 2");

function getStudents(id, callback){
    setTimeout(() => {
        console.log("Fetching from database...");
        callback ({id: id, name: "Pranav"})
    },3000)
}

function getCourses(student, callback){
     setTimeout(() => {
         console.log("Student courses from database...");
         callback({id: student.id, name: student.name, course: ["JS", "Python"]})
     },1500)
}

function getCoursesPrice(course, callback){
    setTimeout(() => {
        console.log("Prices...");
        callback({[course[0]]: 550, [course[1]]: 400})
    },3000)
}