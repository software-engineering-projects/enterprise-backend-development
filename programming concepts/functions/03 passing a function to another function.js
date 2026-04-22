function metaData(name, age, sex) {

     return {
          name: name,
          age: age,
          sex: sex
       };
     }

function dataCheck(data) {

     let normalizesex = data.sex.toLowerCase();
     const sexcat = ['male', 'female']

     if (typeof data.name !== "string") {
          
          console.log(`${data.name} is not a valid name`);
          return "Error";
                  
        } else {
          console.log(`${data.name} is a valid name`);

       }

     if (typeof data.age !== "number") {

          console.log(`${data.age} is not a valid age`);
          return "Error";
                 
        } else {
          console.log(`${data.age} is a valid age`);

       }  

     if (!sexcat.includes(normalizesex)) {
          
          console.log(`${normalizesex} is not a valid category`);
          return "Error";

       } else {
          console.log(`${normalizesex} is a valid category`);
          return "Success";

      }
     }


function callFunction(arg1, arg2) {

     const data = arg1;
     const validate = arg2;

     if (validate(data) === "Success") {
          console.log("data is valid");
          } else {
               console.log("data is invalid");
          }
     }       

const data = metaData('x', 0, 'Male#');

callFunction(
     data,
     dataCheck
)
