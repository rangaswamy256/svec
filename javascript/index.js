


// let name="Ranga";
// var age=30;

// if(age>30){
//     var name="Ranga K";
//     console.log(name);
// }
// console.log(name);



// 
// alert("Registration is completed succes")
//  let n=prompt("Enter password")
//  console.log(n)
//  confirm("Are you sure to exit")



// console.log("Welcome")
// console.info("for information")
// console.warn("check once again")
// console.error("not defined")


//spread operator


// let  external_mark=[23,45,34,67,89]
// let  internal_mark=[1,2,3,4,5,6,7]
  


// let results=[...external_mark,23,45,78,09]
// let final_marks=[ 3246,4647,745,...external_mark,...internal_mark]
// console.log(results)
// console.log(final_marks)



//Rest parameter

// function addition(x,y,...remainData){
//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData))

// }

// console.log(addition(2,3 ,345,546,645,456,546,"hello ho"))


//Destructuring of Array data


// let employees=["Ranga","Swamy","chamundi","Harry"]
//  let name1=employees[0]
//  let name2=employees[1]
//  let name3=employees[2]
//  console.log(name1)
//  console.log(name2)
//  console.log(name3)
// let [ranga,swamy,...data]=employees
// console.log(ranga)
// console.log(data)


let employe={
     name:"ranga",
     designation:"student",
     salary:"3lpa",
     mob:2736428375

}
 let { name,designation,...remainList}=employe;
 console.log(name);
 console.log(designation);
 console.log(remainList)

