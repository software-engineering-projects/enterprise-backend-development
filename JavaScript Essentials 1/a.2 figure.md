```mermaid
flowchart LR

%% CLIENT
CLIENT[Client-Side<br/>Web / Mobile Apps]

%% EDGE / DELIVERY LAYER
CDN[CDN / Static Assets]
LB[Load Balancer]

%% API LAYER
GW[API Gateway<br/>Routing + Rate Limiting + Auth]

%% BACKEND SERVICES
subgraph BACKEND[Backend Services (Microservices)]
AUTH[Auth Service<br/>Login / Tokens]
USER[User Service]
ORDER[Order Service]
PAYMENT[Payment Service]
NOTIF[Notification Service]
end

%% DATA LAYER
subgraph DATA[Data Layer]
DB[(Primary Database)]
CACHE[(Cache Redis)]
SEARCH[(Search Engine)]
end

%% ASYNC / EVENTS
MQ[Message Queue / Event Bus]

%% OBSERVABILITY
LOGS[Logging]
MONITOR[Monitoring / Metrics]
TRACE[Tracing]

%% FLOW
CLIENT --> CDN --> LB --> GW

GW --> AUTH
GW --> USER
GW --> ORDER
GW --> PAYMENT

USER --> CACHE
ORDER --> DB
PAYMENT --> DB
AUTH --> DB

ORDER --> MQ
PAYMENT --> MQ
MQ --> NOTIF

USER --> SEARCH

BACKEND --> LOGS
BACKEND --> MONITOR
BACKEND --> TRACE

GW --> CLIENT
```
