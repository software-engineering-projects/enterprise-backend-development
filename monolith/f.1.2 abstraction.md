# Abstraction in TypeScript — Practical Understanding (Backend Focus)

## 1. Core Concept

**Abstraction means:**
* Hiding implementation details and exposing only the required behavior.

**Or more practically:**
* Focus on what something does, not how it does it.

---

## 2. Interface — Defining the Contract

```typescript
interface Shape {
  area(): number;
  perimeter(): number;
}
```

### Explanation
An interface defines a contract. It specifies:
* Required methods
* Expected behavior

It does **not** define:
* How the behavior is implemented
* What data is used internally

> **Key Idea:** Interfaces define the **WHAT**, not the **HOW**.

---

## 3. Class Implementation — Defining the “How”

### Circle Example
```typescript
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
```
**Explanation:**
* `Circle` implements the `Shape` interface.
* It must provide: `area()` and `perimeter()`.
* **Internal Details:** Stores `radius` and uses circle-specific formulas.

### Rectangle Example
```typescript
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
```
**Explanation:**
* Also implements `Shape`.
* Uses different internal data and logic.

---

## 4. Multiple Implementations, Same Contract

At this point:
* `Circle` and `Rectangle` are different internally.
* But both satisfy the `Shape` contract.

> **Key Insight:** Different implementations can share the same interface.

---

## 5. Using Abstraction in Functions

```typescript
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;

  for (const shape of shapes) {
    totalArea += shape.area();
  }

  return totalArea;
}
```

### Explanation
This function:
* Accepts any object that implements `Shape`.
* Calls `area()` without knowing the concrete type.

### Important Behavior
The function does not care whether the object is a `Circle`, a `Rectangle`, or any future shape. It only cares that `area()` exists.

---

## 6. Object Creation and Usage

```typescript
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapes: Shape[] = [circle, rectangle];

console.log("Total area:", calculateTotalArea(shapes));
```

### Explanation
* Instances of different classes are created.
* Stored in a single array of type `Shape[]`.
* Treated uniformly.

---

## 7. What This Example Teaches

1. **Interfaces define behavior:** They act as a contract that implementations must follow.
2. **Implementations define logic:** Each class decides how the behavior works internally.
3. **Functions depend on abstraction:** They rely on the interface, not concrete implementations.

---

## 8. Backend Interpretation (Critical)

This example is not about geometry—it models a backend concept.

### Mapping to Backend

| Concept in Example | Backend Equivalent |
| :--- | :--- |
| **Shape** | Service/Repository contract |
| **Circle** | One implementation |
| **Rectangle** | Another implementation |
| **calculateTotalArea** | Business logic function |

### Backend Example

```typescript
interface OrderRepository {
  create(order: any): void;
}

// Different implementations:
class PostgresOrderRepository implements OrderRepository { /* ... */ }
class InMemoryOrderRepository implements OrderRepository { /* ... */ }

// Business logic:
function createOrder(repo: OrderRepository) {
  repo.create(...);
}
```

---

## 9. Core Benefit of Abstraction

Abstraction allows:
* **Maintainability:** Change implementation without affecting logic.
* **Scalability:** Add new implementations without rewriting existing code.
* **Testability:** Use mock or fake implementations.

---

## 10. Key Mental Model

**Separate what the system does from how it does it.**

---

## 11. One-Line Rule

> “Write code that depends on what something can do, not what it is.”

---

## 12. Important Note for Backend Development

Although the example uses classes, abstraction in real backend systems can also be done using:
* Interfaces
* Plain objects
* Functions
* Modules

Classes are not required to achieve abstraction.

---

## 13. When to Use Abstraction

Use abstraction when:
* You need to swap implementations (e.g., database).
* Code is tightly coupled to low-level details.
* You want better testability.
* The system is starting to grow.

---

## 14. When NOT to Use It

Avoid abstraction when:
* There is only one simple implementation.
* No external dependency exists yet.
* No complexity or duplication is present.

---

## Final Summary

**Abstraction is:** A way to design systems so that high-level logic is independent of low-level implementation details.
