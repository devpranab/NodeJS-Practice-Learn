//Promises:
//Promises - pending
//pending => success(resolve)
//pending => fail(reject)
/*
const p = new Promise((resolve, reject) => {
    //Async operation => result
    setTimeout(() => {
      resolve("The promise is successfull");
    },3000);
    //resolve("The promise is successfull");
    //reject("The promise is failure!");

})

//console.log(p);

p.then((result) => {
 console.log(result); //The promise is successfull
}).catch((err) => {
    console.log(err);
})

console.log("After");
*/

//Replacing Callbacks
//Use promises

console.log("Line 1");

getStudents(3)
.then(student => {
    console.log(student);
    return getCourses(student);
})
.then(course => {
    console.log(course);
    return getCoursesPrice(course.course);
})
.then(marks => console.log(marks));

console.log("Line 2");

function getStudents(id){
  //const p = new Promise((resolve, reject) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Fetching from database...");
        resolve({id: id, name: "Pranav"})
    },3000)
 })
}

function getCourses(student){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         console.log("Student courses from database...");
         resolve({id: student.id, name: student.name, course: ["JS", "Python"]})
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