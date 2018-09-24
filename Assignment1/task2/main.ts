class Student{
    name:string;
    age:number;
    rollNo:number;
constructor(x,y,z){
   this.name=x;
   this.age=y;
   this.rollNo=z;
}
}
let std1 :Student= new Student("Shahrukh",23,1512186);
let std2 :Student= new Student("Sohail",22,1512187);
window.alert(std1.name);
window.alert(std2.name);