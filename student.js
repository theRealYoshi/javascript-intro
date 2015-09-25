function Student (first, last) {
  this.firstName = first;
  this.lastName = last;
  this.courseList = [];
  //
  // this.name = function () {
  //   console.log(this.firstName + " " + this.lastName);
  //
  // };
  //
  // this.courses = function () {
  //   return this.courseList;
  //
  // };
  //
  // this.enroll = function (course) {
  //   for (var i = 0; i < this.courseList.length; i++) {
  //     if (course === this.courseList[i]) {
  //       return;
  //     }
  //   }
  //   //break will get here
  //   this.courseList.push(course);
  //   course.add_student(this);
  //
  // };

};

Student.prototype = {
  name: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  courses: function () {
    return this.courseList;
  },
  enroll: function(course){
    for (var i = 0; i < this.courseList.length; i++) {
      if (course === this.courseList[i]) {
        return;
      }
    }
    //break will get here
    this.courseList.push(course);
    course.add_student(this);
  },
  course_load: function(){
  }
};

function Course (name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.studentList = [];
  //
  // this.students = function () {
  //   return this.studentList;
  //
  // };
  //
  // this.add_student = function (student) {
  //   for (var i = 0; i < this.studentList.length; i++) {
  //     if (student === this.studentList[i]) {
  //       return;
  //     }
  //   }
  //   this.studentList.push(student);
  //   student.enroll(this);
  //
  // };
};

Course.prototype = {
  students: function(){
    return this.studentList;
  },

  add_student: function(student){
    for (var i = 0; i < this.studentList.length; i++) {
      if (student === this.studentList[i]) {
        return;
      }
    }
    this.studentList.push(student);
    student.enroll(this);
  }
};

var s1 = new Student("ned", "ruggeri");
var c1 = new Course("ruby", "aa", "4");
s1.enroll(c1);
console.log(s1.courses()[0].students());
c1.add_student(s1);
console.log(c1);
console.log(c1.students()[0].courses());

// console.log(c1);
// console.log(s1);
