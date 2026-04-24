# Class Properties (Instance Variables) vs Static Variables

## 1. Instance Variables (Class Properties)

```typescript
class Rectangle {
  constructor(private width: number, private height: number) {}
}
```

### What they are:
Data that belongs to a **specific object (instance)**.

### Key idea:
* Each object gets its own copy
* Values are **NOT** shared

### Example:
```typescript
const r1 = new Rectangle(4, 6);
const r2 = new Rectangle(10, 20);
```

**Internally:**
* `r1.width = 4`, `r1.height = 6`
* `r2.width = 10`, `r2.height = 20`

### Think:
“Each object has its own state”

### Use case:
* User data
* Orders
* Products
* Anything that represents a real entity

---

## 2. Static Variables (Shared Class Variables)

```typescript
class Counter {
  static count = 0;
}
```

### What they are:
Data that belongs to the **class itself**, not instances.

### Key idea:
* Shared across **ALL** instances
* Only one copy exists

### Example:
```typescript
Counter.count++;
Counter.count++;
```

Even if you create instances:
```typescript
new Counter();
new Counter();
```
They all share the same `count`.

### Think:
“One shared value for the entire class”

### Use case:
* Counters
* Shared cache
* Global state inside a class
* Metrics / tracking

---

## 3. Core Difference (Simple View)

| Feature | Instance Variable | Static Variable |
| :--- | :--- | :--- |
| **Belongs to** | Object | Class |
| **Shared?** | ❌ No | ✅ Yes |
| **Copies** | One per object | One total |
| **Access** | `this.width` | `ClassName.value` |

---

## 4. One-line intuition

> **Instance variables** = per object state
> **Static variables** = shared class state
