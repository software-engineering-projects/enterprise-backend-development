flowchart TD

%% =========================
%% CORE TAKEAWAY
%% =========================
A[JavaScript Runs on Both Client & Server] --> B[Backend Focus: Data, Logic, Processing]
B --> C[Server Returns Results to Client]

%% =========================
%% CLIENT VS SERVER
%% =========================
subgraph S1[Clear Separation of Responsibilities]
  D1[Client-Side (Browser)]
  D1 --> D2[UI & User Interaction]
  D1 --> D3[Runs on User Device]

  E1[Server-Side (Backend)]
  E1 --> E2[Logic & Data Handling]
  E1 --> E3[Runs on Node.js or similar]

  D1 <--->|Requests / Responses| E1
end

%% =========================
%% BACKEND ROLE
%% =========================
subgraph S2[Backend = System Brain]
  F1[Receive Requests]
  F2[Process Data / Database Access]
  F3[Send Response]

  F1 --> F2 --> F3
end

E1 --> F1

%% =========================
%% APPLICATION FLOW
%% =========================
G1[Client Sends Request<br/>(login, fetch data)] --> G2[Backend Validates & Processes]
G2 --> G3[Backend Returns Response (JSON)]

%% =========================
%% ONE LANGUAGE
%% =========================
subgraph S3[One Language Across Both Sides]
  H1[JavaScript on Client]
  H2[JavaScript on Server]
  H1 --- H2
  H3[Easier Transition Frontend ↔ Backend]
end

%% =========================
%% BACKEND CONTROL
%% =========================
subgraph S4[Backend is Hidden & Controlled]
  I1[Not Visible to Users]
  I2[Authentication]
  I3[Business Rules]
  I4[Sensitive Operations]
end

%% =========================
%% OUTPUT TYPE
%% =========================
subgraph S5[Output Type]
  J1[Frontend Output = UI (Visuals)]
  J2[Backend Output = Data (JSON)]
  J3[Users, Products, Results]
end

%% =========================
%% MENTAL MODEL
%% =========================
K1[Client = Ask] --> K2[Backend = Decide + Process + Respond]

%% =========================
%% COMMON MISTAKES
%% =========================
subgraph S6[Common Beginner Mistakes]
  L1[Mixing frontend & backend concerns]
  L2[Too much focus on UI]
  L3[Browser feature distraction]
  L4[Fix: Think server-side]
end

%% =========================
%% FINAL MINDSET
%% =========================
M1[How does backend process this?]
M2[What data is handled?]
M3[What response is returned?]
