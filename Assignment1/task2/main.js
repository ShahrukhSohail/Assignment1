var Student = /** @class */ (function () {
    function Student(x, y, z) {
        this.name = x;
        this.age = y;
        this.rollNo = z;
    }
    return Student;
}());
var std1 = new Student("Shahrukh", 23, 1512186);
var std2 = new Student("Sohail", 22, 1512187);
window.alert(std1.name);
window.alert(std2.name);
