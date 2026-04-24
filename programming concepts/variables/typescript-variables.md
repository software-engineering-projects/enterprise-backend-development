# Variables in TypeScript — Types, Scope, and Usage (Backend Perspective)

## 1. Overview

In TypeScript (and JavaScript), “variables” can exist in different forms depending on where they live and what they belong to.

Understanding this is important for backend development because it affects:
* Data lifetime
* Accessibility
* Structure
* Maintainability

---

## 2. Standalone Variables (Local Variables)

### Definition
Variables declared inside a function or block scope.

### Example
```typescript
function createOrder() {
  const total = 100;
  const tax = 10;

  return total + tax;
}
```

### Characteristics
* Exist only inside the function/block
* Destroyed after function finishes
* Not accessible outside

### Use Case
* Temporary calculations
* Request processing
* Intermediate values

### Backend Meaning
Used for short-lived logic inside request handlers or services.

---

## 3. Global Variables

### Definition
Variables declared outside functions/classes, accessible throughout the file or application.

### Example
```typescript
const API_VERSION = "v1";

function getVersion() {
  return API_VERSION;
}
```

### Characteristics
* Accessible anywhere in the file/module
* Lives for the lifetime of the program/module
* Risk of overuse

### Use Case
* Configuration values
* Constants
* Environment-like values (small apps)

> [!WARNING]
> **Backend Warning:** Avoid excessive global state in backend systems.

---

## 4. Function Parameters (Input Variables)

### Definition
Variables passed into functions as input.

### Example
```typescript
function createOrder(userId: number, productId: number) {
  return {
    userId,
    productId,
  };
}
```

### Characteristics
* Only exist inside function
* Defined by caller
* Immutable by convention

### Use Case
* Receiving request data
* Passing dependencies or inputs

### Backend Meaning
Parameters are how data enters your system.

---

## 5. Class Properties (Instance Variables)

### Definition
Variables that belong to an object created from a class.

### Example
```typescript
class Rectangle {
  constructor(private width: number, private height: number) {}
}
```

### Characteristics
* Belong to an object instance
* Each object has its own copy
* Represent object state

### Use Case
* Modeling real-world entities (User, Order, Product)
* Storing persistent object data

### Backend Meaning
Represents the state of a domain entity.

---

## 6. Static Variables (Shared Class Variables)

### Definition
Variables shared across all instances of a class.

### Example
```typescript
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }
}
```

### Characteristics
* Shared across all instances
* Belongs to class, not object
* One copy in memory

### Use Case
* Caching shared data
* Counters, metrics
* Configuration shared across instances

### Backend Meaning
Global state but scoped inside a class.

---

## 7. Constant Variables (const)

### Definition
Variables whose reference cannot be reassigned.

### Example
```typescript
const port = 3000;
```

### Characteristics
* Cannot be reassigned
* Block-scoped
* Often used for configuration

### Use Case
* Configuration values
* Fixed references
* Safe immutability

### Backend Meaning
Stable configuration values that should not change.

---

## 8. Difference Summary Table

| Type | Scope | Lifetime | Purpose |
| :--- | :--- | :--- | :--- |
| **Local variable** | Function/block | Temporary | Computation |
| **Global variable** | File/module | App lifetime | Shared constants |
| **Parameter** | Function | Temporary | Input data |
| **Instance property**| Object | Object lifetime | State storage |
| **Static variable** | Class | App lifetime | Shared class state |
| **Const variable** | Block | Block lifetime | Immutable value |

---

## 9. Backend Mental Model (IMPORTANT)

Think of a backend system like this:

| Concept | Role |
| :--- | :--- |
| **Parameters** | Input into system |
| **Local variables** | Temporary processing |
| **Instance properties** | Stored entity state |
| **Static variables** | Shared system state |
| **Const variables** | Configuration |

---

## 10. Key Insight

Different “variables” are not just syntax differences — they define how long data lives and where it belongs in a system.

---

## 11. One-Line Rule

> “Use local variables for computation, parameters for input, and instance properties for state.”
