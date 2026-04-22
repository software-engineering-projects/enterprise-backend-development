function processUser(user) {
     console.log("step 1:", user);

     if (!user.name) {
          console.log("Step 2: invalid user");
          return "Error";
     }

     console.log("Step 3: valid user");
     return "Success";     
     }

     processUser({ name: "Alice" }); // we are passing a key value pair object

/*
📌 VALUES YOU CAN PASS INTO A JAVASCRIPT FUNCTION

1. Number
   Example: 42

2. String
   Example: "hello"

3. Boolean
   Example: true

4. Null
   Example: null

5. Undefined
   Example: undefined

6. Plain Object (Object Literal)
   Example: { name: "Alice", age: 20 }

7. Array
   Example: [1, 2, 3]

8. Function
   Example: () => "hello"

9. Class Instance (custom objects)
   Example: new User("Alice")

10. Date object
   Example: new Date()

11. Map object
   Example: new Map([["a", 1]])

12. Set object
   Example: new Set([1, 2, 3])

13. RegExp object
   Example: /abc/

🧠 FINAL IDEA

In JavaScript:

✔ Anything that is a value can be passed into a function

That includes:
- primitives
- objects
- built-in object types
- custom objects
- functions themselves
*/
