function checkUser(user) {
     if (!user.name) {
          console.log("invalid user");
     }

     comsole.log("valid user");
     } 
    
checkUser({ name: "null" });

/*
Stack trace:
ReferenceError: comsole is not defined
    at checkUser (<anonymous>:5:3)
    at <anonymous>:7:1
*/
