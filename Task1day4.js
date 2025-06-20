// Array of students with their marks
const students = [
  { name: "guhan", marks: [78, 85, 90] },
  { name: "arun", marks: [76, 80, 92] },
  { name: "akil", marks: [95, 92, 88] },
  { name: "loki", marks: [80, 70, 55] }
];

// Step 1: Calculate total marks for each student
let studentsWithTotal = [];
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let total = 0;

  // Add up the marks
  for (let j = 0; j < student.marks.length; j++) {
    total += student.marks[j];
  }

  // Create a new student object with total marks
  studentsWithTotal.push({
    name: student.name,
    marks: student.marks,
    total: total
  });
}

console.log("Students with Total Marks:", studentsWithTotal);

// Step 2: Find students with total marks > 200
let highScorers = [];
for (let i = 0; i < studentsWithTotal.length; i++) {
  if (studentsWithTotal[i].total > 200) {
    highScorers.push(studentsWithTotal[i]);
  }
}

console.log("Students Scoring More Than 200:", highScorers);

// Step 3: Find topper's total marks
let topperTotal = 0;
for (let i = 0; i < studentsWithTotal.length; i++) {
  if (studentsWithTotal[i].total > topperTotal) {
    topperTotal = studentsWithTotal[i].total;
  }
}
console.log("Topper's Total Marks:", topperTotal);

// Step 4: Find topper's name and marks
let topper = studentsWithTotal[0];
for (let i = 1; i < studentsWithTotal.length; i++) {
  if (studentsWithTotal[i].total > topper.total) {
    topper = studentsWithTotal[i];
  }
}

console.log("Topper:", topper.name, "with", topper.total, "marks");