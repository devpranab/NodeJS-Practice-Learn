
// async function studentData(){
//     const student = await getStudents(3)
//     const course = await getCourses(student)
//     const marks = await getCourses(course.course)
//     console.log(marks);
// }
// studentData();


console.log("Line 1");
//simpify then func.
// getStudents(3)
// .then(student => getCourses(student))
// .then(course => getCoursesPrice(course.course))
// .then(marks => console.log(marks))
// .catch(err => console.log(err));

//async awit
async function studentData(){
    try{
    const student = await getStudents(3);
    const course = await getCourses(student);
    const marks = await getCoursesPrice(course.course);
    console.log(marks);
    } catch(err){
        console.log(err);
    }
}
studentData();


console.log("Line 2");

function getStudents(id){
  //const p = new Promise((resolve, reject) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Fetching from database...");
        const student = ({id: id, name: "Pranav"})
        console.log(student);
        resolve(student);
    },3000)
 })
}

function getCourses(student){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         console.log("Student courses from database...");
         const course = ({id: student.id, name: student.name, course: ["JS", "Python"]})
         //console.log(course);
         //resolve(course);
         reject("Error Occured");
     },1500)
 })
}

function getCoursesPrice(course){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Prices...");
        resolve({[course[0]]: 550, [course[1]]: 400})
    },3000)
})
}
