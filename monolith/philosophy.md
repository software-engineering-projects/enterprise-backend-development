# MONOLITH INFRASTRUCTURE PHILOSOPHY

A monolith is not "simple backend code."

It is:
> 🧩 **A single executable system** that owns all business logic, all rules, and all decisions, and coordinates everything internally.

---
<br>

## 🎯 Core Philosophy

#### 1. "One brain, many responsibilities"
Instead of splitting logic across services like:
*   `auth-service`
*   `user-service`
*   `billing-service`

You have:
*   🧠 **One application** that contains all of them internally.
<br>

#### 2. "Internal communication is free"
Inside a monolith, function calls replace network calls. There is **no HTTP overhead** between modules.

*   **So:** `userService.createUser()` → *Direct function call*
*   **Not:** An HTTP request to another service.
<br>

#### 3. "Data consistency is easier"
Because everything shares the:
*   Same runtime
*   Same database connection rules
*   Same transaction boundary

You can enforce **ACID-level correctness** without distributed complexity.
<br>
<br>
<br>

#### 4. "Complexity is postponed, not removed"
Monoliths are:
*   ✅ Easy at the start.
*   ❌ Harder as they grow.

**The key idea:** You trade early simplicity for future restructuring flexibility.
<br>
<br>
<br>

#### 5. "Boundaries are logical, not physical"
- You still structure code like microservices (e.g., `auth` module, `user` module, `payment` module), but they all live inside **one codebase**.

---
<br>

## 🧱 YOUR SYSTEM (MENTAL MODEL)

- Let’s imagine a **User Management + Simple E-commerce System**.
<br>

#### 🌐 1. CLIENT LAYER (Web / Mobile)
---
**What it is:** The UI (Browser or Mobile App).

**Scenario:**
A user opens your app and says: *"I want to buy headphones."*
1. Search products.
2. Click product.
3. Place order.

**What the client does NOT do:**
*   ❌ Does NOT validate business rules.
*   ❌ Does NOT access the database.
*   ❌ Does NOT decide pricing.
*   ✅ It only **sends requests** and **displays results**.
<br>

#### 🌍 2. EDGE LAYER (CDN + Load Balancer)
---
#### A. CDN (Content Delivery Network)
*   **Role:** Serves static assets (JS bundle, images, CSS).
*   **Scenario:** Instead of your server sending `logo.png`, the CDN has it cached nearby for fast loading.

#### B. Load Balancer
*   **Role:** Distributes incoming requests.
*   **Scenario:** If you have 3 backend instances (App A, B, and C), the Load Balancer sends the request to the instance that is least busy.
<br>

#### 🧠 3. APPLICATION LAYER (MONOLITH CORE) 
---
This is the **entire brain** of your system.

#### Modules inside the Monolith:
1.  **Auth Module:** Login, register, password hashing, JWT creation.
2.  **User Module:** Profiles, updates, lookups.
3.  **Product Module:** Listings, search, details.
4.  **Order Module:** Place order, calculate total, validate stock.
<br>

## 🔥 SCENARIO FLOW (VERY IMPORTANT)

#### 🎯 Case Study: User places an order

1.  **Request arrives:**
    Client sends:
    ```json
    POST /orders
    {
      "userId": 1,
      "productId": 10,
      "quantity": 2
    }
    ```
2.  **Load Balancer forwards request:** → Monolith App receives it.
3.  **Application layer starts processing:**
    *   **A. Validation layer:** Checks if `userId` is valid and `quantity > 0`.
    *   **B. Business logic:** Fetches price, checks stock, calculates total.
    *   **C. Auth check:** Is the user logged in?
    *   **D. Order creation:** Creates the record and reduces stock.
4.  **Database interaction:** 
    *   `INSERT INTO orders ...`
    *   `UPDATE products SET stock = stock - 2`
5.  **Response returned:** `200 OK` with order details.
<br>

#### 🗄️ 4. DATA LAYER
---
*   **PostgreSQL (Primary DB):** The system of record for users, products, and orders.
*   **Cache (Redis):** Speed layer. Returns search results instantly instead of querying the DB every time.
*   **Search Index:** Fast search engine for queries like `"head"` → `headphones`.
<br>

#### 📊 5. OBSERVABILITY LAYER
---
The "nervous system" of your app.

*   **Logging System:** Traces what happened (e.g., `ERROR: stock not available`).
*   **Metrics System:** Tracks request latency, error rates, and CPU usage.
<br>

### 🔁 FULL SYSTEM FLOW (COMPLETE VIEW)

```mermaid
graph TD
  A[CLIENT] --> B[CDN / Static Assets]
  A --> C[LOAD BALANCER]
  C --> D[MONOLITH APP]
  
  subgraph "Inside Monolith"
  D --> D1[Validation]
  D --> D2[Auth]
  D --> D3[Business Logic]
  D --> D4[DB Access]
  end
  
  D4 --> E[(PostgreSQL)]
  D4 --> F[(Redis)]
  D4 --> G[(Search Index)]
  
  E --> D
  D --> C
  C --> A
```
---
<br>

### 🚀 NEXT STEP: YOUR PROJECT

Since you already have **PostgreSQL**, **VS Code**, and **Deno**, we will build a:
#### 🧪 "Monolith Backend Simulator"

**We will implement:**
1.  HTTP server (Deno)
2.  Auth module
3.  User module
4.  Product module
5.  PostgreSQL connection
6.  Basic validation layer
7.  Logging system
