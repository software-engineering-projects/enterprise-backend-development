# Design Patterns — Practical Backend Definition (Monolith Focus)

## 1. What Are Design Patterns REALLY?

Design patterns are:
* **Named solutions** for structuring code when it starts to become complex due to growth or change.
* They are **not** meant to be used at the start of a project.

> **Key Principle:**
> Not before complexity appears. Only when it is needed.

Design patterns are a response to real structural problems, not a starting point for writing code.

---

## 2. Critical Rule for Monolith Backend Development

When building a monolith backend (e.g., with Deno + TypeScript):

### DO NOT:
* Force design patterns early
* Add architectural layers “just because they exist”
* Create unnecessary abstractions for simple logic
* Optimize structure before understanding the problem

### DO:
* Write simple, direct code first
* Prioritize clarity over structure initially
* Refactor only when real pain appears (complexity, duplication, coupling)
* Introduce patterns gradually and intentionally

---

## 3. Core Engineering Principle: “Pain-Driven Design”

Design patterns should be introduced only when you observe real issues such as:
* Functions becoming too large or unreadable
* Logic being duplicated across modules
* Changes requiring edits in multiple places
* Hard-to-test or tightly coupled code
* Confusion in code responsibility boundaries

**If none of these problems exist, patterns are unnecessary overhead.**

---

## 4. Learning Strategy (Monolith-Oriented Approach)

This approach is optimized for building backend systems, not studying theory in isolation.

> “We are mining only useful ideas for a monolith backend system.”

This means:
* You do not learn patterns in abstract
* You extract patterns from real code problems
* You apply them only when they solve an actual structural issue

---

## 5. Practical Development Pipeline

This is the workflow for introducing design improvements safely:

### Step 1 — Write Simple Feature
Implement the feature in the most direct way possible.
* No extra layers
* No premature abstractions
* Focus on correctness and clarity

### Step 2 — Let the Code Grow Naturally
Allow real usage to reveal limitations.
* Add features incrementally
* Observe where complexity appears
* Avoid premature refactoring

### Step 3 — Identify Pain Points
Look for structural problems such as:
* Repetition of logic
* Difficulty adding new features
* Increasing coupling between modules
* Confusing or bloated functions

### Step 4 — Apply Pattern Only to Solve the Pain
Introduce a design pattern or refactor only when it directly addresses the identified issue.

**Examples:**
* Extract **service layer** when logic grows too large
* Introduce **repository pattern** when data access becomes complex
* Use **abstraction** when dependencies become hard to manage

---

## 6. Core Mental Model

Design patterns are not rules to follow — they are tools to reduce structural pain in growing systems.

They exist to help you:
1. **Control complexity**
2. **Improve maintainability**
3. **Support future change**

*Not to make early-stage code “look advanced.”*
