# 🧠 Real-world places where values are assigned in TypeScript

In a real backend using TypeScript, values come from **trusted internal sources**, not raw users.

---

### 1. 📦 Configuration (Very common)
*Example: Environment configuration*

```typescript
const config = {
  port: 3000,
  dbUrl: "postgres://localhost:5432/app",
  jwtSecret: "secret",
};
```

**👉 These values are:**
* Assigned at build/start time.
* **NOT** user input.
* Used throughout the system.

---

### 2. 🗄️ Database Results
Very common in backend systems:

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = await db.users.findById(1);
```

**Here:**
* You assign a variable from the DB.
* TypeScript ensures the structure matches the `User` type.
* **👉 This is runtime data but type-checked at the boundary.**

---

### 3. 🔁 Internal Service Calls (Monolith Example)
In your monolith:

```typescript
const product = productService.getProductById(10);

const order = {
  userId: user.id,
  productId: product.id,
  quantity: 2,
};
```

**👉 This is developer-controlled composition of data.**
It is internal system logic, not direct user input.

---

### 4. 🧪 Testing / Mocks
*Very important in real development.*

```typescript
const mockUser: User = {
  id: 1,
  name: "Test User",
};
```

**Used for:**
* Unit tests.
* Integration tests.
* Development simulation.

---

### 5. ⚙️ Derived Values (Business Logic)
```typescript
const totalPrice: number = quantity * product.price;
```

**Here:**
* The value is computed inside the system.
* TypeScript ensures the correctness of the type.

---

## 💡 Key Realization
> **Your concern:** *"We don't assign values at compile time, these are inputs by users."*

**The Correction:**
* ❌ **Users NEVER** directly assign values to TypeScript variables.
* ✅ **Developers and internal systems** assign values in code.

---

### ⚙️ Where users actually come in
Users only influence this part:

```typescript
const body = await request.json(); // raw runtime input
```

Then your system turns it into **structured data**:

```typescript
const order: CreateOrderRequest = {
  userId: user.id,      // From internal session (Safe)
  productId: body.productId, // From user (Needs validation)
  quantity: body.quantity,   // From user (Needs validation)
};
```

**Notice:**
1. User input is **RAW**.
2. Your system converts it into a **SAFE** structure.

---

## 🧱 Clean Mental Model

| Source | Compile-time (TypeScript) | Runtime (JavaScript) |
| :--- | :--- | :--- |
| **Assignments come from:** | DB, Config, Internal Logic, Mocks | HTTP requests, External APIs, User input |
| **Trust Level:** | High (Internal) | Low (Needs validation) |
| **Control:** | Developer controlled | User controlled |
