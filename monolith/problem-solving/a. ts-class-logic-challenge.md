
# TypeScript Class Logic Challenges — Instance vs. Static

This document contains a series of exercises designed to test and refine your understanding of class properties, instance variables, and static variables in TypeScript.

---

## 🧠 Part 1: Predict the Output

### Problem 1 — Basic Instance Behavior
```typescript
class Dog {
  constructor(public name: string) {}
}

const d1 = new Dog("Max");
const d2 = new Dog("Buddy");

d1.name = "Rocky";

console.log(d1.name);
console.log(d2.name);
```
> **👉 What gets printed? Why?**

### Problem 2 — Static Sharing
```typescript
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.count);
```
> **👉 What is the final value?**

### Problem 3 — Instance vs Static Together
```typescript
class Test {
  static x = 10;
  y = 5;
}

const a = new Test();
const b = new Test();

a.y = 20;
Test.x = 50;

console.log(a.y);
console.log(b.y);
console.log(Test.x);
```
> **👉 Predict all three outputs.**

### Problem 4 — Tricky Access
```typescript
class Example {
  static value = 100;
  value = 50;
}

const e = new Example();

console.log(e.value);
console.log(Example.value);
```
> **👉 Two variables with the same name—what happens?**

---

## 🧠 Part 2: Think Deeper (Mutation + Sharing)

### Problem 5 — Hidden Shared State
```typescript
class Tracker {
  static total = 0;

  constructor(public name: string) {
    Tracker.total++;
  }
}

const t1 = new Tracker("A");
const t2 = new Tracker("B");

t1.name = "Z";

console.log(Tracker.total);
console.log(t2.name);
```
> **👉 Which values changed and which didn’t?**

### Problem 6 — Instance Copy vs Shared Value
```typescript
class Box {
  static size = 10;

  constructor(public id: number) {}
}

const b1 = new Box(1);
const b2 = new Box(2);

Box.size = 99;

console.log(b1.id);
console.log(b2.id);
console.log(Box.size);
```
> **👉 Which values are affected by the change?**

---

## 🧠 Part 3: Spot the Bug

### Problem 7 — Wrong Use of Static
```typescript
class User {
  static name: string;

  constructor(name: string) {
    User.name = name;
  }
}

const u1 = new User("Alice");
const u2 = new User("Bob");

console.log(u1);
console.log(u2);
console.log(User.name);
```
> **👉 What’s wrong with this design?**  
> **👉 What unexpected behavior happens?**

### Problem 8 — Wrong Use of Instance Variable
```typescript
class PageTracker {
  visits = 0;

  visit() {
    this.visits++;
  }
}

const p1 = new PageTracker();
const p2 = new PageTracker();

p1.visit();
p1.visit();
p2.visit();

console.log(p1.visits + p2.visits);
```
> **👉 If the goal was to track TOTAL visits across all pages, what’s wrong?**

---

## 🧠 Part 4: Design Thinking

### Problem 9 — Choose Instance or Static
For each, decide: **instance variable** or **static variable**?

1. A `User` class storing each user's email
2. A `Game` class tracking total number of players online
3. A `Product` class storing price
4. A `Logger` class counting how many logs were created
5. A `Car` class storing speed

> **👉 Explain why for each.**

### Problem 10 — Design a Class
Design a `BankAccount` class with:
* Each account has its own balance
* The bank tracks total number of accounts created

> **👉 What should be instance vs static?**

---

## 🧠 Part 5: Advanced Intuition

### Problem 11 — Mental Model Test
Without writing code, answer:
If you create 1,000 objects of a class:
1. How many copies of an **instance variable** exist?
2. How many copies of a **static variable** exist?

### Problem 12 — Real-world Analogy
Match each to **instance** or **static**:
* Your personal phone number
* The population of a country
* Your bank account balance
* The total number of users on a website

---

## 🚀 Optional Challenge (Hard)

### Problem 13 — Mixed Behavior
```typescript
class Score {
  static total = 0;

  constructor(public points: number) {
    Score.total += points;
  }
}

const s1 = new Score(10);
const s2 = new Score(20);

s1.points = 100;

console.log(Score.total);
```
> **👉 Does changing `s1.points` affect `Score.total`?**
