# Object Definition in TypeScript

A basic object in TypeScript can be defined in three primary ways: inline, using an interface, or using a type alias.

## 1. Inline Object Type
This is the simplest form where the type is defined directly alongside the variable declaration.

```typescript
const user: { name: string; age: number } = {
  name: "Alice",
  age: 30
};
```

---

## 2. Interface Declaration
Interfaces are the preferred way to define the "shape" of an object in a reusable way.

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

const employee: Person = {
  firstName: "John",
  lastName: "Doe"
};
```

> **Actionability:** You can test this syntax in the [TypeScript Playground](https://www.typescriptlang.org/play).

---

## 3. Type Alias
Type aliases are similar to interfaces but can also represent primitives, unions, and tuples.

```typescript
type Product = {
  id: number;
  title: string;
};

const item: Product = {
  id: 101,
  title: "Laptop"
};
```

---

## Key Concepts

*   **Type Safety:** TypeScript ensures that you cannot add properties that are not defined in the type or assign the wrong data types (e.g., assigning a number to a string property).
*   **Optional Properties:** Adding a `?` after a property name makes it optional.
*   **Inference:** If you don't explicitly provide a type, TypeScript will infer it based on the assigned value.
