# 🧱 TypeScript File Structure & Execution Model (Backend Monolith)

## 📌 Overview

In modern backend systems using TypeScript:
*   You write code in `.ts` files.
*   The system executes `.js` files at runtime.
*   TypeScript exists only during development and build time.

---

## ⚙️ 1. File Type: Why We Use .ts

### Development Layer
You write:
*   `order.service.ts`
*   `user.controller.ts`
*   `order.types.ts`

These `.ts` files contain type definitions, business logic, and module structure.

### Build Step
The TypeScript compiler (`tsc`) converts:
*   `.ts` → `.js`

**Example:**
*   `order.service.ts` → `order.service.js`

### Runtime Execution
In environments like **Node.js** or **Deno**:
👉 The system runs **.js files only**.

> [!IMPORTANT]
> **🧠 Key Rule:** TypeScript is for development; JavaScript is what actually runs.

---

## 🧩 2. Basic File Pattern (Types + Function)

### Option A — Same File (Common for small modules)
```typescript
type CreateOrderRequest = {
  userId: number;
  productId: number;
  quantity: number;
};

export function createOrder(data: CreateOrderRequest) {
  return { id: 1, ...data };
}
```
**✔ When to use:**
*   Small modules
*   Simple logic
*   Minimal reuse

### Option B — Separate Files (Scalable pattern)

**📁 order.types.ts**
```typescript
export type CreateOrderRequest = {
  userId: number;
  productId: number;
  quantity: number;
};
```

**📁 order.service.ts**
```typescript
import { CreateOrderRequest } from "./order.types";

export function createOrder(data: CreateOrderRequest) {
  return { id: 1, ...data };
}
```
**✔ When to use:**
*   Shared types
*   Multiple modules depend on the same contract
*   Growing system complexity

---

## 🧠 3. Structural Principle

**You organize files by responsibility, not by language.**

*   **NOT:** `/types`, `/services`
*   **INSTEAD:** `/order`, `/user`, `/product`

Each domain owns its types, logic, validation, and controllers.

---

## 🧱 4. Real-World Directory Structures

### 🟢 Small Project (Early Stage)
```text
/src
  order.ts
  user.ts
```
*   **Characteristics:** Types + logic in same file; minimal separation; fast development.

### 🟡 Medium Project (Growing Monolith)
```text
/src
  /modules
    /order
      order.types.ts
      order.service.ts
      order.controller.ts

    /user
      user.types.ts
      user.service.ts
```
*   **Characteristics:** Domain-based structure; separated concerns; reusable types.

### 🔴 Large Project (Production Monolith)
```text
/src
  /modules
    /order
      order.types.ts
      order.service.ts
      order.controller.ts
      order.validation.ts
      order.repository.ts

    /user
      user.types.ts
      user.service.ts
      user.controller.ts

  /shared
    database.ts
    logger.ts

  /infra
    server.ts
    config.ts
```
*   **Characteristics:** Strict modular boundaries; layered architecture; shared infrastructure; scalable for teams.

---

## ⚙️ 5. Execution Flow in a Monolith

```text
Client Request
      ↓
Controller (.ts)
      ↓
Service (.ts)
      ↓
Database / Logic
      ↓
Response

      ↓ (compile)

JavaScript (.js) executes in runtime
```

---

## 🧠 6. Key Concepts to Remember

| TypeScript Layer | JavaScript Runtime |
| :--- | :--- |
| Defines structure | Executes logic |
| Catches developer errors | Handles real data |
| Disappears after build | Runs in Node.js or Deno |

---

## 🔥 7. Practical Rules

*   **Rule 1:** Always write backend code in `.ts`.
*   **Rule 2:** Keep types and logic together for small modules.
*   **Rule 3:** Separate types when they are reused across files, the module grows, or clarity is needed.
*   **Rule 4:** Structure by domain (`order`, `user`, `product`), not by file type.

---

## ⚡ Final Summary
*   `.ts` → development (types + structure)
*   `.js` → runtime execution
*   **Small system** → combine files
*   **Large system** → separate by responsibility
*   Organize by **domain**, not by extension
