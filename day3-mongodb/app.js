// Object Literal

// 객체 지향 프로그래밍 ( OOP; Object Oriented Programming )
// Constructor
// 이름, 이메일, 나이 => 객체

var Student = function(name, email, age) {
    this.name = name;
    this.age = age;
    this.email = email;
    
    // this.introduce = function() {
    //     console.log("저는 " + this.name + "입니다. 연락처: " + this.email);
    // }  
}

Student.prototype.introduce = function() {
    console.log("저는 " + this.name + "입니다. 연락처: " + this.email);
}


var student = new Student("jk", "jkpark@fasst.com", 20);
var student2 = new Student("jk2", "jkpark2@fast.com", 22);


student.introduce();
student2.introduce();
