const data = {
     name: 1,
     age: 2
};

function checkObject(obj) {
     if (!obj.name || !obj.age) { 
          console.log("falsy");
     } else {
          console.log("not falsy");
     }
     }
checkObject({ data });


// What you wrote
checkObject({ data });

// This does not pass:
{ name: 1, age: 2 }

// It passes this:
{
  data: {
    name: 1,
    age: 2
  }
}

// You wrapped data which is a dictionary into another dictionary by enclosing it w/ {} 

// So inside your function:
obj = { data: { name: 1, age: 2 } }
obj.name = undefined
obj.age = undefined
