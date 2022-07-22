//Sync Pattern
// console.log("Line 1");
// setTimeout(() => {     //2 para- function & time
// console.log("Line 2");
// },3000);
// console.log("Line 3");


/*
console.log("Line 1");

const student = getStudents(1); //will undefine so use callback for async
console.log(student);

console.log("Line 2");

function getStudents(id){
    setTimeout(() => {
        console.log("Fetching from database...");
        return {id: id, name: "Pranav"}
    },3000)
}
*/

//callback -rules: add extra para as a func
console.log("Line 1");

getStudents(1, (student) => {
    console.log(student); //callback func
});


console.log("Line 2");

function getStudents(id, callback){
    setTimeout(() => {
        console.log("Fetching from database...");
        callback ({id: id, name: "Pranav"}) //callback call
    },3000)
}