# Object vs. Instance in TypeScript

In TypeScript, the terms "object" and "instance" are often used interchangeably, but they have subtle conceptual differences based on their origin and how they are defined.

*   **Object:** A broad term referring to any data structure that contains key-value pairs of properties and methods. In TypeScript, an object can be created as a simple literal (e.g., `const user = { name: "Alice" };`) without being tied to a specific class.
*   **Instance:** Specifically refers to an object created from a defined TypeScript class using the `new` keyword. It represents a concrete realization of that class's blueprint.

## Key Differences

| Feature | Object | Instance |
| :--- | :--- | :--- |
| **Origin** | Can be a literal, an interface-compliant structure, or a class product. | Specifically created from a Class blueprint. |
| **Creation** | Often created via literals: `{}`. | Created using the `new` keyword: `new MyClass()`. |
| **Relationship** | Describes the data structure itself. | Describes the relationship between the data and its parent class. |
| **Runtime Check** | Usually checked via `typeof` or property existence. | Can be verified using the `instanceof` operator to confirm its class origin. |

---

**Summary:** Every instance is an object, but not every object is an instance (since literal objects are not instantiated from user-defined classes).
