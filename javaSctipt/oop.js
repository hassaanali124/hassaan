// function Bootcamper(fname,lname,age,city){
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//     this.city=city;
// }
// const hassaan=new Bootcamper("hassaan","ali",12,"hyderabad");
// console.log(hassaan);

function Bootcamper(fname,lname,age,gender){
    this.name={
        fname,
        lname
    }
    this.age=age;
    this.gender=gender;
}
var ali=new Bootcamper("hassaan","ali",13,"m");
console.log(ali);