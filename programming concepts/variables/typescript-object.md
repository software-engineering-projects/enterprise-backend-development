# Constructor (TypeScript) vs `__init__` (Python) — Object Initialization

## 1. Core Idea

Both **`constructor`** (TypeScript/JavaScript) and **`__init__`** (Python) are special functions used to:
> **Initialize an object’s state when it is created.**

They are automatically executed when a new instance of a class is instantiated.

---

## 2. TypeScript: `constructor`

### Example
```typescript
class Rectangle {
  constructor(private width: number, private height: number) {}
}
```

### Usage
```typescript
const rect = new Rectangle(4, 6);
```

### Behavior
* `constructor` runs automatically when `new Rectangle()` is called.
* Initializes object properties (`width`, `height`).
* Sets up the initial state of the object.

### Key Points
* Only one constructor per class.
* Executes during object creation.
* Often used to assign properties or inject dependencies.

---

## 3. Python: `__init__`

### Example
```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
```

### Usage
```python
rect = Rectangle(4, 6)
```

### Behavior
* `__init__` runs automatically after object creation.
* Initializes instance attributes (`width`, `height`).
* Sets up the object's initial state.

### Key Points
* Acts as an initializer method.
* Must explicitly assign values to `self`.
* Runs automatically when the class is called.

---

## 4. Direct Comparison

| Concept | TypeScript | Python |
| :--- | :--- | :--- |
| **Initialization method** | `constructor()` | `__init__()` |
| **Called when** | `new Class()` | `Class()` |
| **Purpose** | Set up object state | Set up object state |
| **Property assignment** | `this.width` | `self.width` |

---

## 5. Conceptual Flow

### TypeScript
1. `new Rectangle(4, 6)`
2. → `constructor` runs
3. → Object is initialized

### Python
1. `Rectangle(4, 6)`
2. → Object is created
3. → `__init__` runs
4. → Object is initialized

---

## 6. Backend Interpretation

Both serve the same architectural purpose:
> **They define how a domain entity is initialized when it enters the system.**

**Examples:**
* **User creation:** Initialize user state.
* **Order creation:** Initialize order state.
* **Payment creation:** Initialize transaction state.

---

## 7. Key Insight

The constructor (`constructor` / `__init__`) is the entry point for defining the initial state of an object in memory.

---

## 8. One-Line Summary

`constructor` in TypeScript and `__init__` in Python both initialize an object’s state automatically when the object is created.
