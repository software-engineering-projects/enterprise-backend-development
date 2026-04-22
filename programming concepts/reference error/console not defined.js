function checkUser(user) {
     if (!user.name) {
          console.log("invalid user");
     }

     comsole.log("valid user"); // wrong spelling 'comsole'
     } 
    
checkUser({ name: "null" });

/*
Stack trace:
ReferenceError: comsole is not defined
    at checkUser (<anonymous>:5:3)
    at <anonymous>:7:1

EXPLANATION:

WRONG
• Console.log("test");

CORRECT
• console.log("test");
*/
