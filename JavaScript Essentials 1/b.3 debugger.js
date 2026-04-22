/*
1. What a debugger actually is (backend meaning)

- A debugger is:
  - A controlled way to pause a running program
  - A tool for inspecting program state while it executes

- It helps answer:
  - What is the value of this variable right now?
  - Which path did the code take?
  - Where did the logic break?
  - Did the function receive correct input?

- Backend perspective:
  - You are inspecting a live system while it runs
  - You observe execution, not just final output

2. Core idea of debugging

- Key principle:
  - Errors are not obvious
  - You must observe program state while it runs

- Everything else (tools, UI, shortcuts):
  - Are just implementation details

3. Your current setup vs a real debugger

- You are using:
  - Deno
  - VS Code notebooks

- You already have equivalent debugging tools:

  1. Console debugging
     - console.log(variable)
     - Primary debugging method for learning

  2. Manual step-by-step reasoning
     - Simulate execution mentally:
       - input arrives
       - function runs
       - condition checks
       - output returns

  3. VS Code debugger (optional)
     - breakpoints
     - step over / step into
     - variable inspection

  4. Deno runtime inspection (advanced)
     - not required at this stage

4. Backend debugging concept

- Debugging in backend systems means:
  - Tracing data flow through the system

- Without debugging mindset:
  - You guess why an API is wrong

- With debugging mindset:
  - You inspect:
    - request payload
    - function inputs
    - transformation steps
    - final output

- Core idea:
  - Debugging = understanding data movement through logic

5. What to practice now

- Focus on manual debugging using code + logs

*/

function processUser(user) {
  console.log("Step 1:", user);

  if (!user.name) {
    console.log("Step 2: invalid user");
    return "Error";
  }

  console.log("Step 3: valid user");
  return "Success";
  }
  processUser({ name: "John" });

/*
- Practice goal:
  - Observe execution flow
  - Track variable states

Exercise 2: Break logic intentionally

- Call:
  processUser({});

- Observe:
  - Which branch executes
  - Where failure occurs
  - What state looks like

Exercise 3: Manual breakpoint simulation

- Use comments to simulate execution steps:

// request received
// validating input
// processing data
// returning response

- This mimics a debugger workflow without tools

6. When browser debugger is actually needed

- Use browser dev tools when working with:
  - frontend UI (HTML/CSS/DOM)
  - client-side JavaScript
  - browser network requests

- Not needed for your current stage:
  - backend logic learning

7. Common misunderstanding

- Incorrect assumption:
  - "I need advanced debugger tools before coding"

- Correct progression:
  1. Write code
  2. Break code
  3. Observe output
  4. Understand failure
  5. Then learn advanced tools

Final takeaway

- Your current debugging toolkit is enough:

  - console.log tracing
  - manual step-by-step reasoning
  - input/output inspection

- This is sufficient for your current learning stage
*/
