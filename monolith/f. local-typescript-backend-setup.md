# 🧱 Local TypeScript Backend Setup Using Deno

## 📌 Overview
This setup allows you to:
*   Write backend code in TypeScript (`.ts`)
*   Run it directly using Deno
*   Get automatic type checking before execution
*   Build a modular monolith structure

---

## ⚙️ 1. Prerequisites
Ensure you have installed:
*   **Deno**

Verify installation:
```bash
deno --version
```

---

## 📁 2. Project Setup
**Step 1 — Create project folder**
```bash
mkdir monolith-app
cd monolith-app
```

---

## 🧩 3. Basic File Structure

### Small Project (Single Module)
```text
/monolith-app
  main.ts
  order.ts
```

### Medium Project (Modular Structure)
```text
/monolith-app
  main.ts
  /modules
    /order
      order.types.ts
      order.service.ts
```

---

## 🧱 4. Writing TypeScript Code

**📄 order.types.ts**
```typescript
export type CreateOrderRequest = {
  userId: number;
  productId: number;
  quantity: number;
};
```

**📄 order.service.ts**
```typescript
import { CreateOrderRequest } from "./order.types.ts";

export function createOrder(data: CreateOrderRequest) {
  return {
    orderId: crypto.randomUUID(),
    ...data,
  };
}
```

**📄 main.ts**
```typescript
import { createOrder } from "./modules/order/order.service.ts";

const result = createOrder({
  userId: 1,
  productId: 10,
  quantity: 2,
});

console.log(result);
```

---

## ▶️ 5. Running the Application
Execute the program:
```bash
deno run main.ts
```

---

## 🧠 What Happens Internally
```text
TypeScript (.ts)
   ↓ (auto-check + compile)
JavaScript (internal)
   ↓
Executed by Deno runtime
```

---

## 🚨 6. TypeScript Validation Example

### ❌ Incorrect Code
```typescript
const result = createOrder({
  userId: "1", // wrong type
  productId: 10,
  quantity: 2,
});
```

### 💥 Result
Deno stops execution and shows:
`Type 'string' is not assignable to type 'number'`

### ✔ Correct Code
```typescript
const result = createOrder({
  userId: 1,
  productId: 10,
  quantity: 2,
});
```

---

## 🧠 7. Key Concepts

| TypeScript Layer | Runtime Layer (Deno) |
| :--- | :--- |
| Enforces types during development | Executes compiled JavaScript |
| Prevents incorrect function usage | Handles actual program execution |
| Runs automatically in Deno | Does NOT enforce TypeScript types |

---

## ⚠️ 8. Important Limitation
TypeScript does **NOT** validate external input.

**Example:**
```typescript
const body = await request.json();
createOrder(body); // unsafe
```
Even if the input is:
```json
{
  "userId": "1"
}
```
👉 This will **NOT** be caught by TypeScript.

---

## 🧱 9. Recommended Next Step (Runtime Validation)
To handle real-world input:
```typescript
function validateCreateOrder(data: any) {
  if (typeof data.userId !== "number") {
    throw new Error("Invalid userId");
  }
  return data;
}
```

---

## 🧠 10. Monolith Development Model
```text
main.ts (entry point)
   ↓
controller (handles request)
   ↓
service (business logic)
   ↓
types (data contracts)
```

---

## ⚡ Final Summary
*   **Write code** → `.ts`
*   **Run app** → Deno executes (internally `.js`)
*   **TypeScript** → compile-time safety
*   **Deno** → runtime execution
*   **Small app** → single file
*   **Growing app** → modular structure

> [!TIP]
> **🧠 One-Line Takeaway:** Using Deno, you can write and run TypeScript directly with built-in type checking, making it ideal for building a modular monolith backend without a separate build step.
